"use client";

import {
  createElement,
  forwardRef,
  useCallback,
  useImperativeHandle,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import {
  motion,
  useAnimation,
  useReducedMotion,
  type TargetAndTransition,
  type Transition,
  type Variants,
} from "motion/react";

export type IconTag = "path" | "circle" | "rect" | "line" | "polyline" | "polygon" | "ellipse";
export type IconNode = [tag: IconTag, attrs: Record<string, string | number>];

export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

export interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  strokeWidth?: number;
}

/* ------------------------------------------------------------------ */
/* Timing system                                                       */
/* One scale for every icon, so the whole set feels like one hand.     */
/* ------------------------------------------------------------------ */

/** Arrivals decelerate like a confident expo-out. */
export const EASE = [0.16, 1, 0.3, 1] as const;
/** Multiplies every icon duration and delay. Raise it to slow all animations down. */
export const TIME_SCALE = 1.6;

/**
 * Returning to rest is a critically damped spring, not a fixed tween: it
 * follows through and settles, and an interrupted animation reverses from
 * wherever it is without a jump.
 */
const SETTLE = {
  type: "spring",
  stiffness: 300,
  damping: 26,
  mass: 0.8,
  opacity: { duration: 0.2 },
  pathLength: { duration: 0.2 },
} as unknown as Transition;

/** For users who ask for less motion: no movement, just a brief opacity cue so a hover still gives feedback. */
const REDUCED: TargetAndTransition = { opacity: [1, 0.5, 1], transition: { duration: 0.45 } };

/** rest = idle state, to = hovered state. `instant` resets with no visible rewind (rotationally symmetric icons). */
export const mv = (
  rest: TargetAndTransition,
  to: TargetAndTransition,
  t: Transition = {},
  instant = false,
): Variants => ({
  normal: { ...rest, transition: instant ? { duration: 0 } : SETTLE },
  animate: {
    ...to,
    transition: {
      duration: 0.4 * TIME_SCALE,
      ease: EASE,
      ...t,
      ...(typeof t.duration === "number" && { duration: t.duration * TIME_SCALE }),
      ...(typeof t.delay === "number" && { delay: t.delay * TIME_SCALE }),
    },
  },
  reduced: REDUCED,
});

export const DRAW_REST = { pathLength: 1, opacity: 1 };
export const DRAW = { pathLength: [0, 1], opacity: [0, 1] };

type Controls = ReturnType<typeof useAnimation>;

/* ------------------------------------------------------------------ */
/* Hand-written parts (used by the curated icon components)            */
/* ------------------------------------------------------------------ */

interface PartProps {
  c: Controls;
  rest: TargetAndTransition;
  to: TargetAndTransition;
  t?: Transition;
  instant?: boolean;
  origin?: string;
  as?: "path" | "g";
  d?: string;
  children?: ReactNode;
}

/** One animated piece of a hand-written icon: a path (d) or a group (as="g"). */
export function Part({ c, rest, to, t, instant, origin, as = "path", d, children }: PartProps) {
  const Tag = (as === "g" ? motion.g : motion.path) as typeof motion.g;
  // origin is "Xpx Ypx" in viewBox units; motion wants fractions of the box, so pin the box to the viewBox
  const [ox, oy] = origin ? origin.split(" ").map((v) => parseFloat(v) / 24) : [];
  return (
    <Tag
      d={d}
      initial="normal"
      animate={c}
      variants={mv(rest, to, t, instant)}
      style={origin ? { transformBox: "view-box", originX: ox, originY: oy } : undefined}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Movement library                                                    */
/*                                                                     */
/* Each movement is built from the principles of animation:            */
/*  anticipation   a small counter-move before the main action         */
/*  squash/stretch volume-preserving scale on things that have mass    */
/*  follow-through overshoot, then settle                              */
/*  overlap        parts start a beat apart (delay / stagger)          */
/*  arcs           rotation around a hinge, not straight lines         */
/*  slow in/out    easeInOut for cycles, easeOut for arrivals          */
/*  staging        one clear action per icon, accents subordinate      */
/*  exaggeration   subtle but readable: <=14deg, <=1.14x, <=2.6px      */
/* ------------------------------------------------------------------ */

export type Fx =
  | "swing" | "tilt" | "pop" | "beat" | "hop" | "spin" | "nudge" | "float" | "shake"
  | "blink" | "flash" | "draw" | "wave" | "grow" | "slide" | "sweep" | "lift" | "tap"
  | "sway" | "flip" | "flicker" | "write" | "twinkle";

export interface Rig {
  fx: Fx;
  /** node indices this movement drives */
  n: number[];
  /** transform origin in viewBox units */
  o?: [number, number];
  /** amount: degrees for rotations, fraction for scales */
  a?: number;
  /** travel in viewBox units */
  d?: [number, number];
  /** delay before this part starts (seconds, before TIME_SCALE) */
  dl?: number;
  /** extra delay per node, for overlapping action */
  st?: number;
  /** per-node origins, for staggered scale movements */
  os?: [number, number][];
  /** rotationally symmetric: reset instantly instead of rewinding */
  sym?: boolean;
}

type V = { rest: TargetAndTransition; to: TargetAndTransition; t?: Transition; instant?: boolean };
const inOut = "easeInOut" as const;
const out = "easeOut" as const;

const FX: Record<Fx, (r: Rig, k: number) => V> = {
  swing: (r, k) => {
    const a = r.a ?? 12;
    return {
      rest: { rotate: 0 },
      to: { rotate: [0, a * 0.22, -a, a * 0.7, -a * 0.4, a * 0.15, 0] },
      t: { duration: 0.95, ease: inOut, delay: dly(r, k) },
    };
  },
  tilt: (r, k) => {
    const a = r.a ?? -8;
    return {
      rest: { rotate: 0 },
      to: { rotate: [0, -a * 0.3, a, -a * 0.2, 0] },
      t: { duration: 0.65, ease: inOut, delay: dly(r, k) },
    };
  },
  pop: (r, k) => {
    const a = r.a ?? 0.14;
    return {
      rest: { scale: 1 },
      to: { scale: [1, 1 - a * 0.45, 1 + a, 1 - a * 0.1, 1] },
      t: { duration: 0.6, ease: out, delay: dly(r, k) },
    };
  },
  beat: (r, k) => {
    const a = r.a ?? 0.13;
    return {
      rest: { scale: 1 },
      to: { scale: [1, 0.95, 1 + a, 1, 1 + a * 0.6, 1] },
      t: { duration: 0.8, ease: inOut, delay: dly(r, k) },
    };
  },
  hop: (r, k) => {
    const h = r.d?.[1] ?? -2.6;
    return {
      rest: { y: 0, scaleX: 1, scaleY: 1 },
      to: {
        y: [0, -h * 0.22, h, 0, h * 0.3, 0],
        scaleY: [1, 0.94, 1.06, 0.95, 1.02, 1],
        scaleX: [1, 1.05, 0.97, 1.04, 0.99, 1],
      },
      t: { duration: 0.85, ease: ["easeOut", "easeOut", "easeIn", "easeOut", "easeIn"], delay: dly(r, k) },
    };
  },
  spin: (r, k) => {
    const a = r.a ?? 360;
    return {
      rest: { rotate: 0 },
      to: { rotate: [0, -Math.sign(a) * Math.abs(a) * 0.04, a] },
      t: { duration: Math.abs(a) >= 360 ? 1.1 : 0.75, ease: inOut, delay: dly(r, k) },
      instant: r.sym === true || Math.abs(a) % 360 === 0,
    };
  },
  nudge: (r, k) => {
    const [dx, dy] = r.d ?? [2.4, 0];
    return {
      rest: { x: 0, y: 0 },
      to: { x: [0, -dx * 0.28, dx, 0], y: [0, -dy * 0.28, dy, 0] },
      t: { duration: 0.65, ease: inOut, delay: dly(r, k) },
    };
  },
  float: (r, k) => ({
    rest: { y: 0, rotate: 0 },
    to: { y: [0, -1.7, 0], rotate: [0, -1.5, 0] },
    t: { duration: 1.1, ease: inOut, delay: dly(r, k) },
  }),
  shake: (r, k) => ({
    rest: { x: 0 },
    to: { x: [0, -1.6, 1.4, -1.0, 0.7, -0.3, 0] },
    t: { duration: 0.6, ease: out, delay: dly(r, k) },
  }),
  blink: (r, k) => ({
    rest: { scaleY: 1 },
    to: { scaleY: [1, 0.08, 1.06, 1] },
    t: { duration: 0.5, ease: inOut, delay: dly(r, k) },
  }),
  flash: (r, k) => ({
    rest: { opacity: 1, scale: 1 },
    to: { opacity: [1, 0.3, 1, 0.6, 1], scale: [1, 1.08, 1] },
    t: { duration: 0.55, ease: inOut, delay: dly(r, k) },
  }),
  draw: (r, k) => ({
    rest: DRAW_REST,
    to: DRAW,
    t: { duration: 0.55, ease: out, delay: dly(r, k) },
  }),
  wave: (r, k) => ({
    rest: { opacity: 1, scale: 1 },
    to: { opacity: [1, 0.25, 1], scale: [1, 0.94, 1.04, 1] },
    t: { duration: 0.65, ease: inOut, delay: (r.dl ?? 0) + k * (r.st ?? 0.13) },
  }),
  grow: (r, k) => ({
    rest: { scaleY: 1 },
    to: { scaleY: [1, 0.4, 1.08, 1] },
    t: { duration: 0.6, ease: out, delay: (r.dl ?? 0) + k * (r.st ?? 0.08) },
  }),
  slide: (r, k) => {
    const [dx, dy] = r.d ?? [2.4, 0];
    return {
      rest: { x: 0, y: 0 },
      to: { x: [0, -dx * 0.2, dx, 0], y: [0, -dy * 0.2, dy, 0] },
      t: { duration: 0.6, ease: inOut, delay: (r.dl ?? 0) + k * (r.st ?? 0.07) },
    };
  },
  sweep: (r, k) => ({
    rest: { x: 0, y: 0 },
    to: { x: [0, -1.7, 1.7, 0], y: [0, 1.7, -1.7, 0] },
    t: { duration: 0.9, ease: inOut, delay: dly(r, k) },
  }),
  lift: (r, k) => {
    const a = r.a ?? -10;
    return {
      rest: { rotate: 0, y: 0 },
      to: { rotate: [0, -a * 0.18, a], y: [0, 0.2, r.d?.[1] ?? -1.5] },
      t: { duration: 0.4, ease: out, delay: dly(r, k) },
    };
  },
  tap: (r, k) => ({
    rest: { scale: 1 },
    to: { scale: [1, 0.9, 1.06, 1] },
    t: { duration: 0.5, ease: out, delay: dly(r, k) },
  }),
  sway: (r, k) => {
    const a = r.a ?? 5;
    return {
      rest: { rotate: 0 },
      to: { rotate: [0, a, -a * 0.7, a * 0.35, 0] },
      t: { duration: 1.1, ease: inOut, delay: dly(r, k) },
    };
  },
  flip: (r, k) => ({
    rest: { scaleX: 1, y: 0 },
    to: { scaleX: [1, 0.06, 1.04, 1], y: [0, -1.4, 0] },
    t: { duration: 0.6, ease: inOut, delay: dly(r, k) },
  }),
  flicker: (r, k) => ({
    rest: { scaleX: 1, scaleY: 1 },
    to: { scaleY: [1, 1.09, 0.96, 1.05, 1], scaleX: [1, 0.96, 1.03, 0.98, 1] },
    t: { duration: 0.65, ease: inOut, delay: dly(r, k) },
  }),
  twinkle: (r, k) => ({
    rest: { scale: 1, rotate: 0 },
    to: { scale: [1, 0.94, 1.16, 0.98, 1], rotate: [0, -10, 8, -3, 0] },
    t: { duration: 0.75, ease: inOut, delay: dly(r, k) },
  }),
  write: (r, k) => ({
    rest: { x: 0, y: 0, rotate: 0 },
    to: { x: [0, 1.4, -0.6, 1, 0], y: [0, -1, 0, -0.6, 0], rotate: [0, -5, 2, -3, 0] },
    t: { duration: 0.85, ease: inOut, delay: dly(r, k) },
  }),
};

function dly(r: Rig, k: number) {
  return (r.dl ?? 0) + (r.st ?? 0) * k;
}

/** Movements that read better with each part on its own clock (overlapping action). */
const PER_NODE = new Set<Fx>(["draw", "wave", "grow", "slide"]);
const perNode = (r: Rig) => PER_NODE.has(r.fx) || (r.st !== undefined && r.st > 0);

const MotionTag = {
  path: motion.path,
  circle: motion.circle,
  rect: motion.rect,
  line: motion.line,
  polyline: motion.polyline,
  polygon: motion.polygon,
  ellipse: motion.ellipse,
} as const;

const originStyle = (o?: [number, number]) =>
  o ? { transformBox: "view-box" as const, originX: o[0] / 24, originY: o[1] / 24 } : undefined;

function RiggedNodes({ nodes, rig, c }: { nodes: IconNode[]; rig: Rig[]; c: Controls }) {
  const owner = new Map<number, Rig>();
  rig.forEach((r) => r.n.forEach((i) => { if (!owner.has(i)) owner.set(i, r); }));
  const done = new Set<number>();
  const out: ReactNode[] = [];

  nodes.forEach(([tag, attrs], i) => {
    if (done.has(i)) return;
    const r = owner.get(i);
    if (!r) {
      out.push(createElement(tag, { key: i, ...attrs }));
      return;
    }
    const members = r.n.filter((j) => owner.get(j) === r && !done.has(j));
    members.forEach((j) => done.add(j));

    if (perNode(r)) {
      members.forEach((j, k) => {
        const node = nodes[j];
        if (!node) return;
        const [t2, a2] = node;
        const Tag = MotionTag[t2] as typeof motion.path;
        const v = FX[r.fx](r, k);
        out.push(
          <Tag
            key={j}
            {...a2}
            initial="normal"
            animate={c}
            variants={mv(v.rest, v.to, v.t, v.instant)}
            style={originStyle(r.os?.[r.n.indexOf(j)] ?? r.o)}
          />,
        );
      });
    } else {
      const v = FX[r.fx](r, 0);
      out.push(
        <motion.g
          key={`g${i}`}
          initial="normal"
          animate={c}
          variants={mv(v.rest, v.to, v.t, v.instant)}
          style={originStyle(r.o ?? [12, 12])}
        >
          {members.map((j) => {
            const node = nodes[j];
            return node && createElement(node[0], { key: j, ...node[1] });
          })}
        </motion.g>,
      );
    }
  });
  return <>{out}</>;
}

/* ------------------------------------------------------------------ */
/* Shell                                                               */
/* ------------------------------------------------------------------ */

interface ShellProps extends Omit<AnimatedIconProps, "children"> {
  children: (controls: Controls) => ReactNode;
}

/** Hover, ref and reduced-motion plumbing shared by every icon. */
export const IconShell = forwardRef<AnimatedIconHandle, ShellProps>(function IconShell(
  { children, size = 24, strokeWidth = 2, className, onMouseEnter, onMouseLeave, ...rest },
  ref,
) {
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();
  // motion throws if its controls are driven before mount or after unmount (React's strict re-run does exactly that),
  // so a caller that outlives the icon is a harmless no-op
  const run = useCallback((variant: string) => {
    try {
      controls.start(variant);
    } catch {
      /* controls not mounted */
    }
  }, [controls]);

  const startAnimation = useCallback(() => run(reduceMotion ? "reduced" : "animate"), [run, reduceMotion]);
  const stopAnimation = useCallback(() => run("normal"), [run]);

  useImperativeHandle(ref, () => ({ startAnimation, stopAnimation }), [startAnimation, stopAnimation]);

  return (
    <div
      className={className}
      style={{ display: "inline-flex" }}
      onMouseEnter={(e) => {
        startAnimation();
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        stopAnimation();
        onMouseLeave?.(e);
      }}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children(controls)}
      </svg>
    </div>
  );
});

interface BaseProps extends AnimatedIconProps {
  nodes: IconNode[];
  rig: Rig[];
}

/** A rigged icon: static nodes plus the movements that drive them. */
export const AnimatedIconBase = forwardRef<AnimatedIconHandle, BaseProps>(function AnimatedIconBase(
  { nodes, rig, ...props },
  ref,
) {
  return (
    <IconShell ref={ref} {...props}>
      {(controls) => <RiggedNodes nodes={nodes} rig={rig} c={controls} />}
    </IconShell>
  );
});
