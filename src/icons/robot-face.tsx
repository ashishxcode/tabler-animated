"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"}],["path",{"d":"M9 16c1 .667 2 1 3 1s2 -.333 3 -1"}],["path",{"d":"M9 7l-1 -4"}],["path",{"d":"M15 7l1 -4"}],["path",{"d":"M9 12v-1"}],["path",{"d":"M15 12v-1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,13],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,16.5],[8.5,5],[15.5,5],[9,11.5],[15,11.5]]}];

export const RobotFaceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RobotFaceIcon.displayName = "RobotFaceIcon";
