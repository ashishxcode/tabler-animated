"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 2l-8 4l8 4l8 -4l-8 -4"}],["path",{"d":"M4 10l8 4l8 -4"}],["path",{"d":"M4 18l8 4l8 -4"}],["path",{"d":"M4 14l8 4l8 -4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[0,-1.5],"st":0.07}];

export const Stack3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Stack3Icon.displayName = "Stack3Icon";
