"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M7 12a5 5 0 1 0 5 -5"}],["path",{"d":"M6.29 18.957a9 9 0 1 0 5.71 -15.957"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[13.65,12],"st":0.08}];

export const ChartArcs3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartArcs3Icon.displayName = "ChartArcs3Icon";
