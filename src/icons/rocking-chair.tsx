"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 3l1.478 6.65a3 3 0 0 0 2.929 2.35h9.593"}],["path",{"d":"M10 12l-3.5 7.5"}],["path",{"d":"M14 12l3.5 7.5"}],["path",{"d":"M3 16c1.966 2.992 4.75 5 9 5s7.035 -2.002 9 -5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.25,15.75],[15.75,15.75]]}];

export const RockingChairIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RockingChairIcon.displayName = "RockingChairIcon";
