"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 16.5v-7.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5"}],["path",{"d":"M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8"}],["path",{"d":"M19 16v6"}],["path",{"d":"M22 19l-3 3l-3 -3"}],["path",{"d":"M16 9h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[10.5,11],"a":0.06},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,12.25],[19,19],[19,20.5],[17,9]]}];

export const DevicesDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DevicesDownIcon.displayName = "DevicesDownIcon";
