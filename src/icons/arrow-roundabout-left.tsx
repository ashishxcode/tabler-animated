"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9h8a5 5 0 1 1 5 5v7"}],["path",{"d":"M7 5l-4 4l4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,12.5],"d":[-2.4,0]}];

export const ArrowRoundaboutLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRoundaboutLeftIcon.displayName = "ArrowRoundaboutLeftIcon";
