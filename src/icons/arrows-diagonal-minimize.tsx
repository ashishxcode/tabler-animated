"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 10h4v-4"}],["path",{"d":"M4 4l6 6"}],["path",{"d":"M18 14h-4v4"}],["path",{"d":"M14 14l6 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":-0.12}];

export const ArrowsDiagonalMinimizeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsDiagonalMinimizeIcon.displayName = "ArrowsDiagonalMinimizeIcon";
