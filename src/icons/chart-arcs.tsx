"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M16.924 11.132a5 5 0 1 0 -4.056 5.792"}],["path",{"d":"M3 12a9 9 0 1 0 9 -9"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[12,12],"st":0.08}];

export const ChartArcsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartArcsIcon.displayName = "ChartArcsIcon";
