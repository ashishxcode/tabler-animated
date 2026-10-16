"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2"}],["path",{"d":"M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5"}],["path",{"d":"M6 19v2"}],["path",{"d":"M18 19v2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,11],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,20],[18,20]]}];

export const ArmchairIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArmchairIcon.displayName = "ArmchairIcon";
