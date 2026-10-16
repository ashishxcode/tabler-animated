"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7"}],["path",{"d":"M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4"}],["path",{"d":"M15 7h.01"}],["path",{"d":"M18 9h.01"}],["path",{"d":"M18 5h.01"}],["path",{"d":"M21 3h.01"}],["path",{"d":"M21 7h.01"}],["path",{"d":"M21 11h.01"}],["path",{"d":"M10 7h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[8,15.5],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,7.5],[15.01,7],[18.01,9],[18.01,5],[21.01,3],[21.01,7],[21.01,11],[10.5,7]]}];

export const SprayIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SprayIcon.displayName = "SprayIcon";
