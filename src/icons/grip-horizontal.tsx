"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M4 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const GripHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GripHorizontalIcon.displayName = "GripHorizontalIcon";
