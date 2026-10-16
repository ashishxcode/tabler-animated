"use client";

import { forwardRef } from "react";
import { IconShell, Part, DRAW, DRAW_REST, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const CalendarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M4 11h16" />
        <Part c={c} rest={DRAW_REST} to={DRAW} t={{duration: 0.2}} d="M11 15h1" />
        <Part c={c} rest={DRAW_REST} to={DRAW} t={{duration: 0.25, delay: 0.15}} d="M12 15v3" />
      </>
    )}
  </IconShell>
));
CalendarIcon.displayName = "CalendarIcon";
