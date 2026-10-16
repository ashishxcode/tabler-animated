"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 5l-8 4l8 4l8 -4l-8 -4","fill":"currentColor"}],["path",{"d":"M10 12l-6 3l8 4l8 -4l-6 -3"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const StackForwardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StackForwardIcon.displayName = "StackForwardIcon";
