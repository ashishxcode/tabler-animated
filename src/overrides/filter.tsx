"use client";

import { forwardRef } from "react";
import { IconShell, Part, type AnimatedIconHandle, type AnimatedIconProps } from "@/lib/animated-icon";

export const FilterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <IconShell ref={ref} {...props}>
    {(c) => (
      <>
        <Part c={c} rest={{scaleX: 1}} to={{scaleX: 0.86}} t={{duration: 0.3}} origin="12px 12px" d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" />
      </>
    )}
  </IconShell>
));
FilterIcon.displayName = "FilterIcon";
