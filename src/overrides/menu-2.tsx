"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const Menu2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} rest={{x: 0}} to={{x: [0, 2.5, 0]}} t={{duration: 0.4}} d="M4 6l16 0" />
        <Part c={c} rest={{x: 0}} to={{x: [0, 2.5, 0]}} t={{duration: 0.4, delay: 0.05}} d="M4 12l16 0" />
        <Part c={c} rest={{x: 0}} to={{x: [0, 2.5, 0]}} t={{duration: 0.4, delay: 0.1}} d="M4 18l16 0" />
      </>
    )}
  </IconShell>
));
Menu2Icon.displayName = "Menu2Icon";
