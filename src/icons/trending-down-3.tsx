"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397"}],["path",{"d":"M18 19l3 -3l-3 -3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,12.5],"st":0.08}];

export const TrendingDown3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrendingDown3Icon.displayName = "TrendingDown3Icon";
