"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const MailIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
        <Part c={c} rest={{scaleY: 1}} to={{scaleY: -0.7}} t={{duration: 0.35}} origin="12px 7px" d="M3 7l9 6l9 -6" />
      </>
    )}
  </IconShell>
));
MailIcon.displayName = "MailIcon";
