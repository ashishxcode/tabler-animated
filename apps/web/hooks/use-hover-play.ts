import { useMemo, useRef } from "react";
import type { AnimatedIconHandle } from "@lib/animated-icon";

/** A ref for an icon plus the handlers that play it on hover or focus and rest it again. */
export function useHoverPlay(onEnter?: () => void) {
  const ref = useRef<AnimatedIconHandle>(null);
  const handlers = useMemo(() => {
    const play = () => {
      ref.current?.startAnimation();
      onEnter?.();
    };
    const rest = () => ref.current?.stopAnimation();
    return { onMouseEnter: play, onFocus: play, onMouseLeave: rest, onBlur: rest };
  }, [onEnter]);
  return { ref, handlers };
}
