"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const BellIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} as="g" rest={{rotate: 0}} to={{rotate: [0, -10, 8, -5, 2, 0]}} t={{duration: 0.6}} origin="12px 4px">
          <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
        </Part>
        <Part c={c} rest={{x: 0}} to={{x: [0, 1.5, -1.5, 1, 0]}} t={{duration: 0.6, delay: 0.05}} d="M9 17v1a3 3 0 0 0 6 0v-1" />
      </>
    )}
  </IconShell>
));
BellIcon.displayName = "BellIcon";
