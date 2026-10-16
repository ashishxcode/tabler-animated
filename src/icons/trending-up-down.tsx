"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 14l6 -6l4 4l9 -9"}],["path",{"d":"M15 3h6v6"}],["path",{"d":"M15 21h6v-6"}],["path",{"d":"M21 21l-6 -6"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3],"o":[11.5,12],"st":0.08}];

export const TrendingUpDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrendingUpDownIcon.displayName = "TrendingUpDownIcon";
