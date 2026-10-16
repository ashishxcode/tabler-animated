"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const SearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} as="g" rest={{x: 0, y: 0}} to={{x: [0, -1.5, 1.5, 0], y: [0, 1.5, -1.5, 0]}} t={{duration: 0.6}}>
          <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </Part>
      </>
    )}
  </IconShell>
));
SearchIcon.displayName = "SearchIcon";
