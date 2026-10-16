"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const SunIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} rest={{scale: 1}} to={{scale: [1, 1.12, 1]}} t={{duration: 0.4}} origin="12px 12px" d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <Part c={c} rest={{rotate: 0}} to={{rotate: 45}} t={{duration: 0.5}} instant origin="12px 12px" d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </>
    )}
  </IconShell>
));
SunIcon.displayName = "SunIcon";
