"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4"}],["path",{"d":"M12 2v2"}],["path",{"d":"M9 12v9"}],["path",{"d":"M15 12v9"}],["path",{"d":"M5 16l4 -2"}],["path",{"d":"M15 14l4 2"}],["path",{"d":"M9 18h6"}],["path",{"d":"M10 8v.01"}],["path",{"d":"M14 8v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,8],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,3],[9,16.5],[15,16.5],[7,15],[17,15],[12,18],[10,8],[14,8]]}];

export const RobotIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RobotIcon.displayName = "RobotIcon";
