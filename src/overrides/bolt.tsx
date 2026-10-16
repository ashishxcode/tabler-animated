"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const BoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} rest={{opacity: 1, scale: 1}} to={{opacity: [1, 0.25, 1, 0.55, 1], scale: [1, 1.08, 1]}} t={{duration: 0.45}} origin="12px 12px" d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
      </>
    )}
  </IconShell>
));
BoltIcon.displayName = "BoltIcon";
