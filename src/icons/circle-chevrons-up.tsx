"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 15l3 -3l3 3"}],["path",{"d":"M9 11l3 -3l3 3"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[0,-1.92]}];

export const CircleChevronsUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleChevronsUpIcon.displayName = "CircleChevronsUpIcon";
