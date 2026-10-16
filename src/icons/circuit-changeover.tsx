"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 12h2"}],["path",{"d":"M20 7h2"}],["path",{"d":"M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M20 17h2"}],["path",{"d":"M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7.5 10.5l8.5 -3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[6],"o":[11.75,8.75],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[3,12],[21,7],[6,12],[18,7],[21,17],[18,17]]}];

export const CircuitChangeoverIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitChangeoverIcon.displayName = "CircuitChangeoverIcon";
