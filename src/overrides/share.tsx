"use client";

import { forwardRef } from "react";
import { IconShell, Part, DRAW, DRAW_REST, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const ShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} rest={{scale: 1}} to={{scale: [1, 1.25, 1]}} t={{duration: 0.4}} origin="6px 12px" d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <Part c={c} rest={{scale: 1}} to={{scale: [1, 1.25, 1]}} t={{duration: 0.4, delay: 0.08}} origin="18px 6px" d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <Part c={c} rest={{scale: 1}} to={{scale: [1, 1.25, 1]}} t={{duration: 0.4, delay: 0.16}} origin="18px 18px" d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <Part c={c} rest={DRAW_REST} to={DRAW} t={{duration: 0.3, delay: 0.1}} d="M8.7 10.7l6.6 -3.4" />
        <Part c={c} rest={DRAW_REST} to={DRAW} t={{duration: 0.3, delay: 0.2}} d="M8.7 13.3l6.6 3.4" />
      </>
    )}
  </IconShell>
));
ShareIcon.displayName = "ShareIcon";
