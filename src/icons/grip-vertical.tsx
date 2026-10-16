"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const GripVerticalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GripVerticalIcon.displayName = "GripVerticalIcon";
