"use client";

import { forwardRef } from "react";
import { IconShell, Part, DRAW, DRAW_REST, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const XIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} rest={DRAW_REST} to={DRAW} t={{duration: 0.3}} d="M18 6l-12 12" />
        <Part c={c} rest={DRAW_REST} to={DRAW} t={{duration: 0.3, delay: 0.12}} d="M6 6l12 12" />
      </>
    )}
  </IconShell>
));
XIcon.displayName = "XIcon";
