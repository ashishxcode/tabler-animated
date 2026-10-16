"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6h5l7 10h6"}],["path",{"d":"M18 19l3 -3l-3 -3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,12.5],"st":0.08}];

export const TrendingDown2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrendingDown2Icon.displayName = "TrendingDown2Icon";
