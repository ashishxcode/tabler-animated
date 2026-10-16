"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const ExternalLinkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
        <Part c={c} as="g" rest={{x: 0, y: 0}} to={{x: [0, 1.5, 0], y: [0, -1.5, 0]}} t={{duration: 0.4}}>
          <path d="M11 13l9 -9" />
          <path d="M15 4h5v5" />
        </Part>
      </>
    )}
  </IconShell>
));
ExternalLinkIcon.displayName = "ExternalLinkIcon";
