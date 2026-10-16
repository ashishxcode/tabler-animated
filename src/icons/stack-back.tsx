"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8l8 4l8 -4l-8 -4l-8 4"}],["path",{"d":"M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2","fill":"currentColor"}],["path",{"d":"M8 10l-4 2l4 2m8 0l4 -2l-4 -2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const StackBackIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StackBackIcon.displayName = "StackBackIcon";
