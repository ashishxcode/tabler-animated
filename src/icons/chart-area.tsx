"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19l16 0"}],["path",{"d":"M4 15l4 -6l4 2l4 -5l4 4l0 5l-16 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,12.5],"st":0.08}];

export const ChartAreaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartAreaIcon.displayName = "ChartAreaIcon";
