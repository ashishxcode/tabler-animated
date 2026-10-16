"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 12v.01"}],["path",{"d":"M3 21h18"}],["path",{"d":"M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0],"a":0.24,"dl":0.1,"st":0.07,"os":[[14,12.01]]}];

export const DoorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DoorIcon.displayName = "DoorIcon";
