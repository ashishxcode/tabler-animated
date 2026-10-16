import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Cycles a spotlight through `stage`, one name at a time. It only runs while it can be seen:
 * paused when the hero is off-screen, the tab is hidden, the visitor is interacting, or motion is reduced.
 */
export function useHeroSpotlight(stage: readonly string[], intervalMs: number, enabled: boolean) {
  const [spot, setSpot] = useState(stage[0] ?? "");
  const [heroVisible, setHeroVisible] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setHeroVisible(!!entry?.isIntersecting), {
      threshold: 0.3,
    });
    observer.observe(el);
    const onVisibility = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const running = enabled && heroVisible && tabVisible && !interacting && !reduceMotion;
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setSpot((current) => stage[(stage.indexOf(current) + 1) % stage.length] ?? current);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [running, stage, intervalMs]);

  return {
    spot,
    pick: setSpot,
    heroRef,
    /** spread onto the element that holds the stage so hover and focus pause the cycle */
    interactionProps: {
      onMouseEnter: () => setInteracting(true),
      onMouseLeave: () => setInteracting(false),
      onFocus: () => setInteracting(true),
      onBlur: () => setInteracting(false),
    },
  };
}
