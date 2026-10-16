"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const ArrowRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} as="g" rest={{x: 0}} to={{x: [0, 3, 0]}} t={{duration: 0.4}}>
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </Part>
      </>
    )}
  </IconShell>
));
ArrowRightIcon.displayName = "ArrowRightIcon";
