"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9h18v-6h-18v18h6v-18"}],["path",{"d":"M3 15h12v-12"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,12],"st":0.08}];

export const ChartCohortIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartCohortIcon.displayName = "ChartCohortIcon";
