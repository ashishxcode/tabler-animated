"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 10l-2 1l8 4l8 -4l-2 -1"}],["path",{"d":"M4 15l8 4l8 -4"}],["path",{"d":"M12 4v7"}],["path",{"d":"M15 8l-3 3l-3 -3"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,11.5],"d":[0,-1.5],"st":0.07}];

export const StackPushIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StackPushIcon.displayName = "StackPushIcon";
