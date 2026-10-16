"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 16a3 3 0 0 1 -3 3"}],["path",{"d":"M16 16a3 3 0 0 0 3 3"}],["path",{"d":"M12 16v4"}],["path",{"d":"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4"}],["path",{"d":"M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,9],"a":0.06},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.5,17.5],[17.5,17.5],[12,18],[12,11]]}];

export const AirConditioningIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AirConditioningIcon.displayName = "AirConditioningIcon";
