"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const ChevronDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} rest={{y: 0}} to={{y: [0, 2.5, 0]}} t={{duration: 0.4}} d="M6 9l6 6l6 -6" />
      </>
    )}
  </IconShell>
));
ChevronDownIcon.displayName = "ChevronDownIcon";
