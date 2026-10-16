"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 12l6 -3l-8 -4l-8 4l6 3"}],["path",{"d":"M10 12l-6 3l8 4l8 -4l-6 -3l-2 1l-2 -1","fill":"currentColor"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const StackBackwardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StackBackwardIcon.displayName = "StackBackwardIcon";
