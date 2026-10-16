import { svgPathBbox } from "svg-path-bbox";

/**
 * Rig derivation. Reads an icon's geometry, classifies its parts, and picks
 * movements that match what the icon depicts. Hand-written rigs in HAND
 * override the derived ones.
 */

export type RawNode = readonly [string, Record<string, string>];
export type Fx =
  | "swing" | "tilt" | "pop" | "beat" | "hop" | "spin" | "nudge" | "float" | "shake"
  | "blink" | "flash" | "draw" | "wave" | "grow" | "slide" | "sweep" | "lift" | "tap"
  | "sway" | "flip" | "flicker" | "write" | "twinkle";

export interface Rig {
  fx: Fx;
  n: number[];
  o?: [number, number];
  a?: number;
  d?: [number, number];
  dl?: number;
  st?: number;
  os?: [number, number][];
  sym?: boolean;
}

type Origin = [number, number] | "center" | "top" | "bottom" | "left" | "right";
type Sel =
  | "all" | "main" | "accent" | "detail" | "rest" | "top" | "bottom" | "left" | "right"
  | "center" | "badge" | "slash" | "hands" | "arcs" | number[];

export interface Spec {
  fx: Fx;
  n: Sel;
  o?: Origin;
  a?: number;
  d?: [number, number];
  dl?: number;
  st?: number;
  sym?: boolean;
  /** per-node origin: node centre, or its bottom edge (for growing bars) */
  per?: "center" | "bottom";
}

/* ---------------------------- geometry ---------------------------- */

interface Geo { x0: number; y0: number; x1: number; y1: number; w: number; h: number; cx: number; cy: number; diag: number }

function bboxOf([tag, a]: RawNode): [number, number, number, number] {
  const num = (k: string) => parseFloat(a[k] ?? "0");
  switch (tag) {
    case "path": return svgPathBbox(a.d ?? "") as [number, number, number, number];
    case "circle": { const r = num("r"); return [num("cx") - r, num("cy") - r, num("cx") + r, num("cy") + r]; }
    case "ellipse": return [num("cx") - num("rx"), num("cy") - num("ry"), num("cx") + num("rx"), num("cy") + num("ry")];
    case "rect": return [num("x"), num("y"), num("x") + num("width"), num("y") + num("height")];
    case "line": return [Math.min(num("x1"), num("x2")), Math.min(num("y1"), num("y2")), Math.max(num("x1"), num("x2")), Math.max(num("y1"), num("y2"))];
    default: {
      const pts = (a.points ?? "").trim().split(/[\s,]+/).map(Number);
      const xs = pts.filter((_, i) => i % 2 === 0);
      const ys = pts.filter((_, i) => i % 2 === 1);
      return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
    }
  }
}

function geoOf(n: RawNode): Geo {
  const [x0, y0, x1, y1] = bboxOf(n);
  const w = x1 - x0, h = y1 - y0;
  return { x0, y0, x1, y1, w, h, cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, diag: Math.hypot(w, h) };
}

interface Ctx {
  nodes: RawNode[];
  geos: Geo[];
  main: number[];
  accent: number[];
  detail: number[];
  badge: number[];
  slash: number[];
  hands: number[];
  arcs: number[];
}

/** Index into an array whose length the caller has already established; a miss is a bug, not a missing value. */
function at<T>(items: readonly T[], index: number): T {
  const item = items[index];
  if (item === undefined) throw new RangeError(`Index ${index} is out of range (length ${items.length})`);
  return item;
}

function analyze(nodes: RawNode[], hasBadgeName: boolean, isOff: boolean): Ctx {
  const geos = nodes.map(geoOf);
  const maxDiag = Math.max(...geos.map((g) => g.diag));
  const idx = nodes.map((_, i) => i);
  const main = idx.filter((i) => at(geos, i).diag >= maxDiag * 0.75);
  const accent = idx.filter((i) => !main.includes(i) && at(geos, i).diag <= 6.0);
  const detail = idx.filter((i) => !main.includes(i) && !accent.includes(i));
  const slash = isOff
    ? idx.filter((i) => at(geos, i).w >= 12 && at(geos, i).h >= 12 && at(nodes, i)[0] === "path" && (at(nodes, i)[1].d ?? "").length <= 40).slice(-1)
    : [];
  const badge = hasBadgeName
    ? idx.filter((i) => i > 0 && !main.includes(i) && !slash.includes(i) && at(geos, i).cx >= 12.5 && at(geos, i).cy >= 12.5 && at(geos, i).diag <= 9.5)
    : [];
  const hands = idx.filter((i) => !main.includes(i) && Math.hypot(at(geos, i).cx - 12, at(geos, i).cy - 12) <= 5.5 && at(geos, i).diag <= 9);
  // concentric arcs and dots, ordered from the source outward by size
  const arcs = idx.filter((i) => at(geos, i).diag <= maxDiag * 0.9 && !slash.includes(i)).sort((a, b) => at(geos, a).diag - at(geos, b).diag);
  return { nodes, geos, main, accent, detail, badge, slash, hands, arcs };
}

const union = (ctx: Ctx, ids: number[]) => {
  const g = ids.map((i) => at(ctx.geos, i));
  const x0 = Math.min(...g.map((v) => v.x0)), y0 = Math.min(...g.map((v) => v.y0));
  const x1 = Math.max(...g.map((v) => v.x1)), y1 = Math.max(...g.map((v) => v.y1));
  return { x0, y0, x1, y1, cx: (x0 + x1) / 2, cy: (y0 + y1) / 2 };
};

const r2 = (n: number) => Math.round(n * 100) / 100;

function resolveSel(sel: Sel, ctx: Ctx, claimed: Set<number>): number[] {
  const all = ctx.nodes.map((_, i) => i);
  let ids: number[];
  if (Array.isArray(sel)) ids = sel.filter((i) => i < ctx.nodes.length);
  else switch (sel) {
    case "all": ids = all; break;
    case "main": ids = ctx.main; break;
    case "accent": ids = ctx.accent; break;
    case "detail": ids = ctx.detail; break;
    case "rest": ids = all; break;
    case "top": ids = all.filter((i) => at(ctx.geos, i).cy <= 9.5); break;
    case "bottom": ids = all.filter((i) => at(ctx.geos, i).cy >= 14.5); break;
    case "left": ids = all.filter((i) => at(ctx.geos, i).cx <= 9.5); break;
    case "right": ids = all.filter((i) => at(ctx.geos, i).cx >= 14.5); break;
    case "center": ids = all.filter((i) => Math.hypot(at(ctx.geos, i).cx - 12, at(ctx.geos, i).cy - 12) <= 5.5 && at(ctx.geos, i).diag <= 9); break;
    case "badge": ids = ctx.badge; break;
    case "slash": ids = ctx.slash; break;
    case "hands": ids = ctx.hands; break;
    case "arcs": ids = ctx.arcs; break;
  }
  return ids.filter((i) => !claimed.has(i));
}

function resolveOrigin(o: Origin | undefined, ctx: Ctx, ids: number[]): [number, number] | undefined {
  if (!o) return undefined;
  if (Array.isArray(o)) return o;
  const u = union(ctx, ids);
  switch (o) {
    case "center": return [r2(u.cx), r2(u.cy)];
    case "top": return [r2(u.cx), r2(u.y0 + 1)];
    case "bottom": return [r2(u.cx), r2(u.y1)];
    case "left": return [r2(u.x0), r2(u.cy)];
    case "right": return [r2(u.x1), r2(u.cy)];
  }
}

export function buildRig(specs: Spec[], ctx: Ctx): Rig[] {
  const claimed = new Set<number>();
  const rigs: Rig[] = [];
  for (const s of specs) {
    const ids = resolveSel(s.n, ctx, claimed);
    if (!ids.length) continue;
    ids.forEach((i) => claimed.add(i));
    const rig: Rig = { fx: s.fx, n: ids };
    const nodeScale = new Set<Fx>(["wave", "pop", "beat", "tap", "blink", "flicker", "hop", "tilt", "spin", "flip"]);
    const per = s.per ?? (!s.o && ((s.st && nodeScale.has(s.fx)) || s.fx === "wave") ? "center" : undefined);
    const o = resolveOrigin(s.o ?? (per ? undefined : "center"), ctx, ids);
    if (o && !per) rig.o = o;
    if (s.a !== undefined) rig.a = s.a;
    if (s.d) rig.d = s.d;
    if (s.dl) rig.dl = s.dl;
    if (s.st) rig.st = s.st;
    if (s.sym) rig.sym = true;
    if (per) rig.os = ids.map((i) => per === "bottom" ? [r2(at(ctx.geos, i).cx), r2(at(ctx.geos, i).y1)] : [r2(at(ctx.geos, i).cx), r2(at(ctx.geos, i).cy)]);
    rigs.push(rig);
  }
  return rigs;
}

/* ----------------------------- rules ------------------------------ */

const BADGE_TOKENS = new Set([
  "plus", "minus", "check", "x", "exclamation", "question", "star", "heart", "bolt", "cog", "code",
  "dollar", "search", "share", "pin", "pause", "cancel", "off", "filled", "bitcoin",
  "spark", "lock", "cancel", "edit", "pencil", "link",
]);

function dirOf(t: Set<string>): [number, number] | null {
  let x = 0, y = 0;
  const turn = t.has("back") || t.has("forward");
  if (t.has("up") || t.has("top")) y -= 1;
  if (t.has("down") || t.has("bottom")) y += 1;
  if (t.has("left") || t.has("back") || t.has("prev")) x -= 1;
  if (t.has("right") || t.has("forward") || t.has("next")) x += 1;
  if (turn) y = 0;
  if (!x && !y) return null;
  const k = x && y ? 0.72 : 1;
  return [r2(x * 2.4 * k), r2(y * 2.4 * k)];
}

const any = (t: Set<string>, ...k: string[]) => k.some((x) => t.has(x));

function coreSpecs(name: string, t: Set<string>, category: string, ctx: Ctx): Spec[] {
  const nodes = ctx.nodes.length;
  const tokens = name.split("-");

  // weather and clouds
  if (t.has("cloud")) {
    if (any(t, "rain", "snow", "storm", "drizzle", "fog")) return [{ fx: "float", n: "main", a: 1 }, { fx: "slide", n: "rest", d: [0, 2], st: 0.09, dl: 0.1 }];
    if (any(t, "bolt", "lightning")) return [{ fx: "float", n: "main" }, { fx: "flash", n: "rest", dl: 0.15 }];
    if (t.has("download")) return [{ fx: "float", n: "main" }, { fx: "nudge", n: "rest", d: [0, 2.2], dl: 0.1 }];
    if (t.has("upload")) return [{ fx: "float", n: "main" }, { fx: "nudge", n: "rest", d: [0, -2.2], dl: 0.1 }];
    return [{ fx: "float", n: "all" }];
  }
  if (any(t, "rain", "umbrella") && !t.has("brand")) return [{ fx: "tilt", n: "all", a: -8, o: "top" }];
  if (t.has("snowflake")) return [{ fx: "spin", n: "all", a: 60, sym: true }];
  if (t.has("wind")) return [{ fx: "slide", n: "all", d: [2.4, 0], st: 0.1 }];
  if (any(t, "flame", "fire")) return [{ fx: "flicker", n: "all", o: "bottom" }];
  if (any(t, "droplet", "drop", "water")) return [{ fx: "hop", n: "all", d: [0, -1.8], o: "bottom" }];
  if (any(t, "leaf", "plant", "tree", "flower", "seeding", "cactus", "grass", "palm", "clover", "plant-2", "trees")) return [{ fx: "sway", n: "all", a: 5, o: "bottom" }];
  if (any(t, "temperature", "thermometer")) return [{ fx: "pop", n: "all", a: 0.1, o: "bottom" }];
  if (t.has("sun") || any(t, "sunrise", "sunset", "brightness")) return [{ fx: "pop", n: "main", a: 0.1 }, { fx: "spin", n: "rest", a: 45, sym: true }];
  if (t.has("moon")) return [{ fx: "tilt", n: "main", a: -14 }, { fx: "pop", n: "rest", a: 0.35, dl: 0.2 }];

  // time
  if (t.has("hourglass")) return [{ fx: "spin", n: "all", a: 180, sym: true }];
  if (any(t, "clock", "stopwatch", "timer", "history") || name === "alarm") {
    if (ctx.hands.length) return [{ fx: "spin", n: "hands", a: t.has("history") ? -360 : 360, o: [12, 12] }, { fx: "pop", n: "all", a: 0.05 }];
    return [{ fx: "shake", n: "all" }];
  }

  // symbols and status
  if (any(t, "refresh", "reload")) return [{ fx: "spin", n: "all", a: 180, sym: true }];
  if (any(t, "loader", "rotate", "repeat", "replace", "sync", "rotate-clockwise")) return [{ fx: "spin", n: "all", a: 360 }];
  if (any(t, "settings", "cog", "gear")) return [{ fx: "spin", n: "all", a: 360 }];
  if (name === "plus") return [{ fx: "spin", n: "all", a: 90, sym: true }];
  if (name === "minus") return [{ fx: "slide", n: "all", d: [1.6, 0] }];
  if (any(t, "circle", "square", "checkbox", "shield", "rounded") && any(t, "check", "x", "plus", "minus")) {
    return [{ fx: "draw", n: "detail", st: 0.1, dl: 0.05 }, { fx: "pop", n: "main", a: 0.05 }];
  }
  if (name === "check" || name === "x") return [{ fx: "draw", n: "all", st: 0.12 }];
  if (["alert", "info", "help", "exclamation", "question"].includes(tokens[0] ?? "")) {
    if (t.has("triangle") || t.has("octagon") || t.has("hexagon")) return [{ fx: "shake", n: "all" }];
    return [{ fx: "pop", n: "accent", a: 0.4, dl: 0.12 }, { fx: "pop", n: "main", a: 0.05 }, { fx: "pop", n: "rest", a: 0.25, dl: 0.1 }];
  }
  if (t.has("ban")) return [{ fx: "shake", n: "all" }];
  if (any(t, "bolt", "flash", "lightning", "electric", "charging", "power", "plug")) return [{ fx: "flash", n: "all" }];
  if (any(t, "heart", "like", "favorite")) return [{ fx: "beat", n: "all" }];
  if (any(t, "star", "stars", "sparkles", "sparkle")) return [{ fx: "twinkle", n: "all" }];
  if (any(t, "thumb")) return [{ fx: "tilt", n: "all", a: t.has("down") ? 14 : -14, o: "bottom" }];
  if (any(t, "award", "trophy", "crown", "medal", "ribbon")) return [{ fx: "pop", n: "main", a: 0.1 }, { fx: "pop", n: "rest", a: 0.3, dl: 0.12 }];
  if (t.has("gift")) return [{ fx: "lift", n: "top", a: -6, d: [0, -1.6], o: "left" }];
  if (any(t, "bookmark", "bookmarks", "tag", "tags", "flag", "badge")) return [{ fx: "swing", n: "all", a: 7, o: "top" }];

  // bells and phones
  if (any(t, "bell", "notification", "ring", "bell-ringing") || t.has("speakerphone")) return [{ fx: "swing", n: "main", a: 12, o: "top" }, { fx: "tilt", n: "rest", a: 7, dl: 0.07, o: "top" }];
  if (t.has("phone")) return t.has("call") ? [{ fx: "swing", n: "all", a: 10 }] : [{ fx: "tilt", n: "all", a: -12 }];
  if (any(t, "alarm", "vibrate", "bug", "skull", "ghost")) return [{ fx: "shake", n: "all" }];

  // eyes, faces, people
  if (t.has("eye") || any(t, "eyeglass")) return [{ fx: "blink", n: "all" }];
  if (any(t, "glasses", "binoculars", "telescope")) return [{ fx: "tilt", n: "all", a: -8 }];
  if (t.has("mood")) return [{ fx: "tilt", n: "main", a: -5 }, { fx: "pop", n: "rest", a: 0.3, st: 0.07, dl: 0.12 }];
  if (name === "users" || name === "friends" || name === "users-group") return [{ fx: "slide", n: "top", d: [0, -1.6], st: 0.1 }];
  if (name === "user" || name === "man" || name === "woman") return [{ fx: "slide", n: [0], d: [0, -1.6] }];
  if (any(t, "hand", "pointer", "click", "tap", "mouse-pointer")) return [{ fx: "tap", n: "all", o: "bottom" }];

  // locks, keys, shields
  if (t.has("lock") && !t.has("open")) return [{ fx: "lift", n: "top", a: 0, d: [0, -1.5] }];
  if (t.has("lock") || t.has("key")) return [{ fx: "tilt", n: "all", a: -12 }];
  if (t.has("shield")) return [{ fx: "pop", n: "main", a: 0.08 }, { fx: "draw", n: "rest", dl: 0.15 }];
  if (t.has("fingerprint")) return [{ fx: "draw", n: "all", st: 0.07 }];

  // search and tools
  if (any(t, "search", "zoom", "magnifier")) return [{ fx: "sweep", n: "all" }];
  if (any(t, "pencil", "edit", "brush", "pen", "writing", "ballpen", "highlight", "eraser", "marker", "paint", "signature")) {
    return t.has("edit") && ctx.detail.length ? [{ fx: "write", n: "detail" }] : [{ fx: "write", n: "all" }];
  }
  if (any(t, "hammer", "axe", "tool", "tools", "wrench", "screwdriver", "saw", "shovel", "pickaxe", "scissors", "ruler", "brush")) return [{ fx: "tilt", n: "all", a: -16, o: "bottom" }];
  if (any(t, "link", "unlink", "paperclip", "magnet", "puzzle")) return [{ fx: "tilt", n: "all", a: -12 }];

  if (t.has("sort") && !t.has("arrows")) return [{ fx: "slide", n: "all", d: [1.8, 0], st: 0.06 }];

  // arrows and movement
  if (any(t, "maximize", "expand", "fullscreen")) return [{ fx: "pop", n: "all", a: 0.12 }];
  if (any(t, "minimize", "collapse")) return [{ fx: "pop", n: "all", a: -0.12 }];
  if (any(t, "download", "upload", "inbox") && !t.has("cloud")) {
    const dy = t.has("upload") ? -2.4 : t.has("inbox") ? 2.2 : 2.4;
    return [{ fx: "nudge", n: "detail", d: [0, dy] }, { fx: "nudge", n: "accent", d: [0, dy] }];
  }
  if (any(t, "arrow", "arrows", "chevron", "chevrons", "caret", "corner", "narrow", "login", "logout", "send", "external") || t.has("switch")) {
    const swapV = t.has("up") && t.has("down") || (t.has("arrows") && t.has("sort")) || (t.has("switch") && t.has("vertical"));
    const swapH = t.has("left") && t.has("right") || (t.has("switch") && !t.has("vertical")) || t.has("exchange");
    if (swapV || swapH) {
      const vertical = swapV;
      const split = ctx.nodes.map((_, i) => i);
      const a = split.filter((i) => (vertical ? at(ctx.geos, i).cx : at(ctx.geos, i).cy) <= 12);
      return [
        { fx: "nudge", n: a, d: vertical ? [0, -2.2] : [-2.2, 0] },
        { fx: "nudge", n: "rest", d: vertical ? [0, 2.2] : [2.2, 0] },
      ];
    }
    const d = dirOf(t);
    const k = any(t, "chevron", "chevrons", "caret") ? 0.8 : 1;
    if (t.has("send") && !d) return [{ fx: "nudge", n: "all", d: [2, -2] }];
    if (t.has("login")) return [{ fx: "nudge", n: "detail", d: [2.4, 0] }];
    if (t.has("logout")) return [{ fx: "nudge", n: "detail", d: [2.4, 0] }];
    if (d) return [{ fx: "nudge", n: "all", d: [r2(d[0] * k), r2(d[1] * k)] }];
    return [{ fx: "nudge", n: "all", d: [2.4, 0] }];
  }
  if (any(t, "plane", "rocket", "send")) return [{ fx: "nudge", n: "all", d: [1.9, -1.9] }];
  if (any(t, "car", "bus", "bike", "truck", "train", "ship", "scooter", "motorbike", "cart", "shopping-cart")) return [{ fx: "slide", n: "all", d: [2.4, 0] }];

  // media
  if ((t.has("player") || t.has("play")) && !t.has("playlist")) {
    if (any(t, "pause")) return [{ fx: "pop", n: "all", a: 0.14, st: 0.1 }];
    if (any(t, "stop", "eject")) return [{ fx: "pop", n: "all", a: 0.1 }];
    if (any(t, "skip", "track")) { const d = dirOf(t); return [{ fx: "nudge", n: "all", d: d ?? [2, 0] }]; }
    return [{ fx: "nudge", n: "all", d: [1.8, 0] }];
  }
  if (any(t, "volume", "wifi", "signal", "broadcast", "rss", "antenna", "radar", "cast", "wave", "waves", "bluetooth")) {
    if (t.has("bluetooth")) return [{ fx: "draw", n: "all", st: 0.1 }];
    const arcs = ctx.arcs;
    return arcs.length ? [{ fx: "wave", n: "arcs", st: 0.13 }] : [{ fx: "pop", n: "all" }];
  }
  if (any(t, "camera", "photo", "aperture", "video", "movie", "film")) return [{ fx: "pop", n: "detail", a: 0.25, st: 0.08 }, { fx: "pop", n: "accent", a: 0.35, dl: 0.12 }, { fx: "tilt", n: "main", a: -3 }];
  if (any(t, "music", "microphone", "headphones", "playlist")) return t.has("playlist") ? [{ fx: "slide", n: "all", d: [2.4, 0], st: 0.07 }] : [{ fx: "hop", n: "all", d: [0, -2] }];

  if (t.has("adjustments")) return [{ fx: "nudge", n: "accent", d: [2.2, 0] }, { fx: "nudge", n: "detail", d: [2.2, 0] }, { fx: "pop", n: "rest", a: 0.04 }];

  // documents before generic list and text rules, so file-text draws its lines
  if (["file", "files", "clipboard", "notes", "note", "report", "article", "newspaper", "book", "notebook", "certificate", "invoice"].includes(tokens[0] ?? "")) {
    if (ctx.detail.length + ctx.accent.length) return [{ fx: "draw", n: "detail", st: 0.07, dl: 0.05 }, { fx: "draw", n: "accent", dl: 0.2 }, { fx: "pop", n: "main", a: 0.04 }];
  }

  // lists, text, layout
  if (any(t, "menu", "list", "align", "indent", "outdent", "text", "layout-list", "grip", "baseline", "letter-case")) {
    if (any(t, "list-details", "menu")) return [{ fx: "slide", n: "all", d: [2.4, 0], st: 0.06 }];
    return [{ fx: "slide", n: "all", d: [2.4, 0], st: 0.06 }];
  }
  if (any(t, "dots", "grid-dots", "dots-vertical", "dots-circle")) return [{ fx: "wave", n: "all", st: 0.06 }];
  if (any(t, "layout", "layers", "stack", "stacks", "apps", "grid")) return [{ fx: "slide", n: "all", d: [0, -1.5], st: 0.07 }];

  // charts
  if (any(t, "chart") && any(t, "bar", "histogram", "candle")) return [{ fx: "grow", n: "all", per: "bottom", st: 0.08 }];
  if (any(t, "chart", "trending", "graph", "timeline", "activity", "presentation", "stats") && !any(t, "pie", "donut", "radar")) return [{ fx: "draw", n: "all", st: 0.08 }];
  if (any(t, "pie", "donut", "radar")) return [{ fx: "tilt", n: "all", a: -14 }];

  // places and things
  if (any(t, "pin", "pinned", "map", "location", "geo") && !t.has("map-2")) return [{ fx: "hop", n: "all", d: [0, -2.2], o: "bottom" }];
  if (t.has("compass")) return [{ fx: "tilt", n: "detail", a: 25 }, { fx: "tilt", n: "accent", a: 25 }];
  if (any(t, "world", "globe", "earth")) return [{ fx: "pop", n: "main", a: 0.06 }, { fx: "draw", n: "rest", st: 0.1, dl: 0.1 }];
  if (any(t, "home", "building", "buildings", "store", "garage", "warehouse", "school", "hospital", "church")) return [{ fx: "hop", n: "all", d: [0, -1.8], o: "bottom" }];
  if (any(t, "shopping", "bag", "basket", "wallet")) return [{ fx: "tilt", n: "all", a: -8, o: "top" }];
  if (t.has("coin") || t.has("coins")) return [{ fx: "flip", n: "all" }];
  if (any(t, "currency", "dollar", "euro", "pound", "rupee", "yen", "bitcoin")) return [{ fx: "pop", n: "all", a: 0.14 }];
  if (any(t, "credit", "cash", "receipt", "discount", "ticket")) return [{ fx: "slide", n: "all", d: [1.8, 0], st: 0.05 }];
  if (any(t, "mail", "envelope", "inbox", "message", "messages", "chat", "bubble", "comment")) {
    if (t.has("message") || t.has("messages") || t.has("chat") || t.has("comment") || t.has("bubble")) return [{ fx: "tilt", n: "main", a: -4 }, { fx: "pop", n: "rest", a: 0.3, st: 0.08, dl: 0.12 }];
    return [{ fx: "tilt", n: "all", a: -6 }];
  }
  if (any(t, "file", "files", "clipboard", "notes", "note", "report", "article", "newspaper", "book", "notebook")) {
    if (ctx.detail.length + ctx.accent.length) return [{ fx: "draw", n: "detail", st: 0.07, dl: 0.05 }, { fx: "draw", n: "accent", dl: 0.2 }, { fx: "pop", n: "main", a: 0.04 }];
  }
  if (any(t, "folder", "archive", "package", "box", "briefcase", "backpack", "luggage")) return [{ fx: "hop", n: "all", d: [0, -1.5], o: "bottom" }];
  if (any(t, "cpu", "device", "keyboard", "mouse", "printer", "battery", "qrcode", "scan", "barcode")) {
    if (any(t, "battery") && any(t, "charging")) return [{ fx: "flash", n: "detail" }, { fx: "flash", n: "all" }];
    return [{ fx: "pop", n: "main", a: 0.06 }, { fx: "pop", n: "rest", a: 0.22, st: 0.07, dl: 0.1 }];
  }
  if (any(t, "code", "braces", "brackets", "parentheses")) {
    const left = ctx.nodes.map((_, i) => i).filter((i) => at(ctx.geos, i).cx <= 11.5);
    return [{ fx: "nudge", n: left, d: [-1.8, 0] }, { fx: "nudge", n: "rest", d: [1.8, 0] }];
  }
  if (any(t, "git", "webhook", "api", "terminal", "binary", "route")) return [{ fx: "draw", n: "all", st: 0.1 }];
  if (any(t, "database", "server") && !any(t, "cpu")) return [{ fx: "wave", n: "all", st: 0.12 }];
  if (any(t, "ball", "basketball", "football", "baseball", "tennis", "volleyball", "bowling", "golf", "soccer")) return [{ fx: "hop", n: "all", d: [0, -2.4], o: "bottom" }];
  if (any(t, "calendar", "event")) return [{ fx: "draw", n: "detail", st: 0.08, dl: 0.05 }, { fx: "pop", n: "accent", a: 0.3, dl: 0.18 }, { fx: "tilt", n: "main", a: -2 }];
  if (any(t, "bulb", "lamp", "idea")) return [{ fx: "flash", n: "all" }];
  if (any(t, "palette", "color", "wand", "magic")) return [{ fx: "tilt", n: "all", a: -14 }];
  if (any(t, "language", "translate")) return [{ fx: "pop", n: "all", a: 0.1 }];

  // category defaults
  if (category === "Shapes") {
    if (any(t, "hexagon")) return [{ fx: "spin", n: "all", a: 60, sym: true }];
    if (any(t, "square", "rectangle", "triangle")) return [{ fx: "tilt", n: "all", a: -8 }];
    return [{ fx: "pop", n: "all", a: 0.12 }];
  }
  if (category === "Brand") return [{ fx: "pop", n: "all", a: 0.1 }];
  if (category === "Letters" || category === "Numbers") return [{ fx: "pop", n: "all", a: 0.12 }];
  if (category === "Document" || category === "Text") {
    if (ctx.detail.length) return [{ fx: "draw", n: "detail", st: 0.07 }, { fx: "pop", n: "main", a: 0.04 }];
  }

  // generic: the body breathes, the details answer a beat later
  if (nodes >= 3) return [{ fx: "pop", n: "main", a: 0.06 }, { fx: "pop", n: "rest", a: 0.24, st: 0.07, dl: 0.1 }];
  if (nodes === 2) return [{ fx: "pop", n: "main", a: 0.08 }, { fx: "pop", n: "rest", a: 0.22, dl: 0.1 }];
  return [{ fx: "pop", n: "all", a: 0.12 }];
}

/* --------------------------- public API --------------------------- */

/** Hand-written rigs for the curated set. Keys are icon names. */
export const HAND: Record<string, Spec[]> = {};

export function deriveRig(name: string, category: string, nodesRaw: RawNode[]): Rig[] {
  const tokens = name.split("-");
  const t = new Set(tokens);
  const isOff = t.has("off");
  const hasBadgeName = tokens.length > 1 && tokens.slice(1).some((x) => BADGE_TOKENS.has(x));
  const ctx = analyze(nodesRaw, hasBadgeName, isOff);

  const manual = HAND[name];
  const specs: Spec[] = [];
  if (ctx.slash.length) specs.push({ fx: "draw", n: "slash", dl: 0.25 });
  if (ctx.badge.length) {
    const drawn = any(t, "plus", "minus", "check", "x", "exclamation", "question", "cancel");
    specs.push(drawn ? { fx: "draw", n: "badge", dl: 0.2, st: 0.08 } : { fx: "pop", n: "badge", a: 0.35, dl: 0.2 });
  }
  specs.push(...(manual ?? coreSpecs(name, t, category, ctx)));
  return buildRig(specs, ctx);
}
