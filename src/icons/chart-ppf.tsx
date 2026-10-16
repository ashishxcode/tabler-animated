"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 17c0 -6.075 -5.373 -11 -12 -11"}],["path",{"d":"M3 3v18h18"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,12],"st":0.08}];

export const ChartPpfIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartPpfIcon.displayName = "ChartPpfIcon";
