import type { IconNode, Rig } from "@lib/animated-icon";

/** One icon in `icons-data.json`: motion rig, SVG nodes, category, space-separated tags. */
export type Entry = [rig: Rig[], nodes: IconNode[], category: string, tags: string];
export type Data = Record<string, Entry>;

export const SIMILAR_COUNT = 24;

export const fmt = (n: number) => n.toLocaleString("en-US");

export const pascal = (s: string) =>
  s
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

/** Looks an icon up by name. Names come from the same dataset, so a miss is a programming error. */
export function entryOf(data: Data, name: string): Entry {
  const entry = data[name];
  if (!entry) throw new Error(`Unknown icon: ${name}`);
  return entry;
}

/** Name and tag search. Name matches rank first, tag-only matches after. Keeps the input order within a score. */
export function searchIcons(data: Data, pool: string[], query: string): string[] {
  const tokens = query
    .toLowerCase()
    .split(/[\s-]+/)
    .filter(Boolean);
  if (!tokens.length) return pool;
  const scored: [name: string, score: number][] = [];
  for (const name of pool) {
    const tags = data[name]?.[3] ?? "";
    let score = 0;
    let matches = true;
    for (const token of tokens) {
      if (name.startsWith(token)) score += 0;
      else if (name.includes(token)) score += 1;
      else if (tags.includes(token)) score += 3;
      else {
        matches = false;
        break;
      }
    }
    if (matches) scored.push([name, score]);
  }
  return scored.sort((a, b) => a[1] - b[1]).map(([name]) => name);
}

/** Same category first, then shared tags; the name itself counts as a tag so "arrow-up" finds "arrow-down". */
export function similarTo(data: Data, name: string): string[] {
  const [, , category, tagStr] = entryOf(data, name);
  const mine = new Set([...tagStr.split(" ").filter(Boolean), ...name.split("-")]);
  const scored: [name: string, score: number][] = [];
  for (const [other, [, , otherCategory, otherTags]] of Object.entries(data)) {
    if (other === name) continue;
    let score = otherCategory === category ? 1 : 0;
    for (const word of [...otherTags.split(" "), ...other.split("-")]) {
      if (word && mine.has(word)) score += 3;
    }
    if (score > 1) scored.push([other, score]);
  }
  return scored
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, SIMILAR_COUNT)
    .map(([other]) => other);
}

/** Categories with their icon counts, largest first. */
export function categoriesOf(data: Data): [category: string, count: number][] {
  const counts = new Map<string, number>();
  for (const [, , category] of Object.values(data)) counts.set(category, (counts.get(category) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}
