"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 10h-4v-4"}],["path",{"d":"M20 4l-6 6"}],["path",{"d":"M6 14h4v4"}],["path",{"d":"M10 14l-6 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":-0.12}];

export const ArrowsDiagonalMinimize2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsDiagonalMinimize2Icon.displayName = "ArrowsDiagonalMinimize2Icon";
