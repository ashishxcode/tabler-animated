"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3"}],["path",{"d":"M15 3h-6"}],["path",{"d":"M15 6h-6"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,11.79],"d":[0,2.4]}];

export const ArrowBigDownLinesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBigDownLinesIcon.displayName = "ArrowBigDownLinesIcon";
