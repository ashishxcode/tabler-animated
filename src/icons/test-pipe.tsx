"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124"}],["path",{"d":"M7 13h8"}],["path",{"d":"M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6"}],["path",{"d":"M15 3l6 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.5,12.5],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,13],[19,17.46],[18,6]]}];

export const TestPipeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TestPipeIcon.displayName = "TestPipeIcon";
