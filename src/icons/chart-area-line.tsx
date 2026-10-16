"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0"}],["path",{"d":"M4 12l3 -4l4 2l5 -6l4 4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,11.5],"st":0.08}];

export const ChartAreaLineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartAreaLineIcon.displayName = "ChartAreaLineIcon";
