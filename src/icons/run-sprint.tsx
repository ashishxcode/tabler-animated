"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.007 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M7 17l5 1l.75 -1.5"}],["path",{"d":"M18 21v-4l-4 -3l1 -6"}],["path",{"d":"M10 12v-3l5 -1l3 3l3 1"}],["path",{"d":"M10 5h-4"}],["path",{"d":"M6 10h-4"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[15.5,14.5],"a":0.06},{"fx":"pop","n":[0,1,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.01,5],[9.88,17.25],[8,5],[4,10]]}];

export const RunSprintIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RunSprintIcon.displayName = "RunSprintIcon";
