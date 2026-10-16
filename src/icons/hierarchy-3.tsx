"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M18 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M2 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 17l2 -3"}],["path",{"d":"M9 10l2 -3"}],["path",{"d":"M13 7l2 3"}],["path",{"d":"M17 14l2 3"}],["path",{"d":"M15 14l-2 3"}],["path",{"d":"M9 14l2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12,12],"a":0.06},{"fx":"pop","n":[6,7,8,9,10,11],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,15.5],[10,8.5],[14,8.5],[18,15.5],[14,15.5],[10,15.5]]}];

export const Hierarchy3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Hierarchy3Icon.displayName = "Hierarchy3Icon";
