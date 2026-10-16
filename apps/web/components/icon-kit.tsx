"use client";

import { forwardRef, useEffect, useRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type IconNode, type Rig } from "@lib/animated-icon";
import { overrides } from "./overrides-map";

const PLAY_DELAY_MS = 60;
const PLAY_DURATION_MS = 1100;

/** One of this library's own hand-tuned icons, used as interface chrome. */
export function UiIcon({ name, size = 16, play = false }: { name: string; size?: number; play?: boolean }) {
  const Icon = overrides[name];
  const ref = useRef<AnimatedIconHandle>(null);

  // `play` runs the icon's own animation once on mount, e.g. the check drawing itself after a copy
  useEffect(() => {
    if (!play) return;
    const start = setTimeout(() => ref.current?.startAnimation(), PLAY_DELAY_MS);
    const stop = setTimeout(() => ref.current?.stopAnimation(), PLAY_DURATION_MS);
    return () => {
      clearTimeout(start);
      clearTimeout(stop);
    };
  }, [play]);

  if (!Icon) return null;
  return <Icon ref={ref} size={size} />;
}

interface IconViewProps {
  name: string;
  nodes: IconNode[];
  rig: Rig[];
  size: number;
  strokeWidth?: number;
}

/** Renders any icon: the hand-written component when one exists, otherwise the rig-driven generic one. */
export const IconView = forwardRef<AnimatedIconHandle, IconViewProps>(function IconView(
  { name, nodes, rig, size, strokeWidth },
  ref,
) {
  const Custom = overrides[name];
  if (Custom) return <Custom ref={ref} size={size} strokeWidth={strokeWidth} />;
  return <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} size={size} strokeWidth={strokeWidth} />;
});
