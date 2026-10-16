"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.026 9.61l-.95 -4.18a2 2 0 0 1 1.95 -2.43h8a2 2 0 0 1 2 2.43l-1 4.2"}],["path",{"d":"M9.026 17.001h6"}],["path",{"d":"M18.906 20.06a7.92 7.92 0 0 0 1 -5.33a8 8 0 1 0 -14.77 5.33a2 2 0 0 0 1.71 .94h10.36a2 2 0 0 0 1.7 -.94"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12.01,14.47],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12.05,6.31],[12.03,17]]}];

export const DumbbellIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DumbbellIcon.displayName = "DumbbellIcon";
