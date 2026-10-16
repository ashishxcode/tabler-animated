"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M16 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M7.5 14h5l4 -4h-10.5m1.5 4l4 -4"}],["path",{"d":"M13 6h2l1.5 3l2 4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12.5],"d":[2.4,0]}];

export const MotorbikeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MotorbikeIcon.displayName = "MotorbikeIcon";
