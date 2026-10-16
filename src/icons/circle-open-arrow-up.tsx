"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15.998 20.066a9 9 0 1 0 -3.998 .934v-13"}],["path",{"d":"M16 12l-4 -4l-4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12.01,12],"d":[0,-2.4]}];

export const CircleOpenArrowUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleOpenArrowUpIcon.displayName = "CircleOpenArrowUpIcon";
