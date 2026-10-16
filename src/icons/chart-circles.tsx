"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 9.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0"}],["path",{"d":"M9 14.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,12],"st":0.08}];

export const ChartCirclesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartCirclesIcon.displayName = "ChartCirclesIcon";
