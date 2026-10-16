"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7l6 6l4 -4l8 8"}],["path",{"d":"M21 10l0 7l-7 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,12],"st":0.08}];

export const TrendingDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrendingDownIcon.displayName = "TrendingDownIcon";
