export const DEFAULT_SIZE = 144;
export const DEFAULT_STROKE = 2;
/** Size and stroke of a plain `<XIcon />`, so the usage snippet can leave them out. */
export const LIBRARY_SIZE = 24;
export const LIBRARY_STROKE = 2;

export const SIZE_PRESETS = [16, 24, 32, 48, 64, 96, 144] as const;
export const TAG_LIMIT = 8;

export const SPRING = { type: "spring", stiffness: 260, damping: 30, mass: 0.9 } as const;
export const EXPO = [0.16, 1, 0.3, 1] as const;
export const FADE_RISE = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: EXPO },
} as const;

/** Stepping slides the icon across the plate. No fade or scale, so its own motion is never cut off. */
const SLIDE_DISTANCE = "70vw";
export const slideVariants = {
  enter: (dir: number) =>
    dir === 0 ? { opacity: 0, scale: 0.7 } : { x: dir > 0 ? SLIDE_DISTANCE : `-${SLIDE_DISTANCE}` },
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) =>
    dir === 0 ? { opacity: 0, scale: 0.85 } : { x: dir > 0 ? `-${SLIDE_DISTANCE}` : SLIDE_DISTANCE },
};
