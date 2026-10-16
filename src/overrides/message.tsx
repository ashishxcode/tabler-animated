"use client";

import { forwardRef } from "react";
import { IconShell, Part, DRAW, DRAW_REST, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const MessageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} rest={DRAW_REST} to={DRAW} t={{duration: 0.3}} d="M8 9h8" />
        <Part c={c} rest={DRAW_REST} to={DRAW} t={{duration: 0.3, delay: 0.12}} d="M8 13h6" />
        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
      </>
    )}
  </IconShell>
));
MessageIcon.displayName = "MessageIcon";
