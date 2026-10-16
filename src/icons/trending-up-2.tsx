"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 5l3 3l-3 3"}],["path",{"d":"M3 18h5l7 -10h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,11.5],"st":0.08}];

export const TrendingUp2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrendingUp2Icon.displayName = "TrendingUp2Icon";
