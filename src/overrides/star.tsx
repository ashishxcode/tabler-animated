"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const StarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} rest={{scale: 1, rotate: 0}} to={{scale: [1, 1.15, 1], rotate: [0, -14, 10, 0]}} t={{duration: 0.55}} origin="12px 13px" d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
      </>
    )}
  </IconShell>
));
StarIcon.displayName = "StarIcon";
