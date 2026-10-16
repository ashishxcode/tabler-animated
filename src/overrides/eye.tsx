"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const EyeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} as="g" rest={{scaleY: 1}} to={{scaleY: [1, 0.1, 1]}} t={{duration: 0.4}} origin="12px 12px">
          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
        </Part>
      </>
    )}
  </IconShell>
));
EyeIcon.displayName = "EyeIcon";
