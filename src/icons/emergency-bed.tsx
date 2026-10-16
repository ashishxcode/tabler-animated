"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5"}],["path",{"d":"M10 6h4"}],["path",{"d":"M12 4v4"}],["path",{"d":"M12 12v2l-2.5 2.5"}],["path",{"d":"M14.5 16.5l-2.5 -2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,10],"a":0.06},{"fx":"pop","n":[0,1,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,18],[8,18],[12,6],[12,6],[10.75,14.25],[13.25,15.25]]}];

export const EmergencyBedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EmergencyBedIcon.displayName = "EmergencyBedIcon";
