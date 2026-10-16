"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 12v.01"}],["path",{"d":"M3 21h18"}],["path",{"d":"M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5"}],["path",{"d":"M21 7h-7m3 -3l-3 3l3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[13,12.01],[17.5,7]]}];

export const DoorEnterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DoorEnterIcon.displayName = "DoorEnterIcon";
