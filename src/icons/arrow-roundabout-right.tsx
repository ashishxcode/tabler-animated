"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 9h-8a5 5 0 1 0 -5 5v7"}],["path",{"d":"M17 5l4 4l-4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,12.5],"d":[2.4,0]}];

export const ArrowRoundaboutRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRoundaboutRightIcon.displayName = "ArrowRoundaboutRightIcon";
