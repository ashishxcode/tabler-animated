"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1"}],["path",{"d":"M12 14a2 2 0 1 0 4.001 -.001a2 2 0 0 0 -4.001 .001"}],["path",{"d":"M17 19a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[14,14],[14,18]]}];

export const ChalkboardTeacherIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChalkboardTeacherIcon.displayName = "ChalkboardTeacherIcon";
