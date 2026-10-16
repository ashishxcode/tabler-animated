"use client";

import { forwardRef } from "react";
import { IconShell, Part, DRAW, DRAW_REST, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const CheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} rest={DRAW_REST} to={DRAW} t={{duration: 0.4}} d="M5 12l5 5l10 -10" />
      </>
    )}
  </IconShell>
));
CheckIcon.displayName = "CheckIcon";
