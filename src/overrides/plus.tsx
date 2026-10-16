"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const PlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} as="g" rest={{rotate: 0}} to={{rotate: 90}} t={{duration: 0.4}} instant origin="12px 12px">
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </Part>
      </>
    )}
  </IconShell>
));
PlusIcon.displayName = "PlusIcon";
