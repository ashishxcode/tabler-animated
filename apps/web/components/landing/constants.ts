export type Density = "s" | "m" | "l";

export const DENSITY: Record<Density, { min: number; icon: number; height: number }> = {
  s: { min: 84, icon: 22, height: 84 },
  m: { min: 104, icon: 28, height: 108 },
  l: { min: 144, icon: 40, height: 140 },
};

/** Icons on the hero canvas, in the order the spotlight visits them. */
export const STAGE = ["bell", "heart", "star", "download", "lock", "sun", "mail"] as const;
export const STAGGER = [
  "sm:mt-8",
  "sm:mt-0",
  "sm:mt-12",
  "sm:mt-3",
  "sm:mt-10",
  "sm:mt-1",
  "sm:mt-7",
] as const;

/** How long each canvas icon holds the spotlight before the next one takes over. */
export const SPOTLIGHT_MS = 2200;

/** Category pills shown in the toolbar before the rest move into the dropdown. */
export const TOP_CATEGORIES = 16;

/** Prefix of the shared-element id for each surface that can grow into the preview. */
export const GRID_ID = (name: string) => `grid-${name}`;
export const STAGE_ID = (name: string) => `stage-${name}`;
