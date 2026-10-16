import { useEffect, type RefObject } from "react";
import { useReducedMotion } from "motion/react";
import type { AnimatedIconHandle } from "@lib/animated-icon";

const PLAY_MS = 1900;
const REST_MS = 450;

/**
 * Keeps the plate icon animating for as long as the preview is open: play, rest, repeat.
 * It waits for the card to grow out or the slide to land, pauses while the tab is hidden, and is off for reduced motion.
 */
export function useIconLoop(
  iconRef: RefObject<AnimatedIconHandle | null>,
  restartKey: string,
  dir: number,
  grewFromCard: boolean,
) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    // only one timer is ever pending: the loop alternates between a play phase and a rest phase
    let timer: ReturnType<typeof setTimeout> | undefined;
    // read the handle when needed: it is swapped while the preview slides to the next icon
    const play = () => iconRef.current?.startAnimation();
    const rest = () => iconRef.current?.stopAnimation();

    function startPlay() {
      if (document.visibilityState === "visible") play();
      timer = setTimeout(startRest, PLAY_MS);
    }
    function startRest() {
      rest();
      timer = setTimeout(startPlay, REST_MS);
    }

    timer = setTimeout(startPlay, dir !== 0 ? 650 : grewFromCard ? 450 : 200);
    return () => {
      clearTimeout(timer);
      rest();
    };
  }, [iconRef, restartKey, dir, grewFromCard, reduceMotion]);
}
