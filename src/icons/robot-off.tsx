"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2m-4 0h-4a2 2 0 0 1 -2 -2v-4"}],["path",{"d":"M12 2v2"}],["path",{"d":"M9 12v9"}],["path",{"d":"M15 15v6"}],["path",{"d":"M5 16l4 -2"}],["path",{"d":"M9 18h6"}],["path",{"d":"M14 8v.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[15,18],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,8],[12,3],[9,16.5],[7,15],[12,18],[14,8]]}];

export const RobotOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RobotOffIcon.displayName = "RobotOffIcon";
