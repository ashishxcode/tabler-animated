"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 15l-3 -3l3 -3"}],["path",{"d":"M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,12],"d":[-1.92,0]}];

export const CircleChevronLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleChevronLeftIcon.displayName = "CircleChevronLeftIcon";
