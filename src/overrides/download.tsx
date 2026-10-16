"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const DownloadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
        <Part c={c} as="g" rest={{y: 0}} to={{y: [0, 2.5, 0]}} t={{duration: 0.5}}>
          <path d="M7 11l5 5l5 -5" />
          <path d="M12 4l0 12" />
        </Part>
      </>
    )}
  </IconShell>
));
DownloadIcon.displayName = "DownloadIcon";
