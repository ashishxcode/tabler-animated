"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 15l6 -6"}],["path",{"d":"M8.56 3.69a9 9 0 0 0 -2.92 1.95"}],["path",{"d":"M3.69 8.56a9 9 0 0 0 -.69 3.44"}],["path",{"d":"M3.69 15.44a9 9 0 0 0 1.95 2.92"}],["path",{"d":"M8.56 20.31a9 9 0 0 0 3.44 .69"}],["path",{"d":"M15.44 20.31a9 9 0 0 0 2.92 -1.95"}],["path",{"d":"M20.31 15.44a9 9 0 0 0 .69 -3.44"}],["path",{"d":"M20.31 8.56a9 9 0 0 0 -1.95 -2.92"}],["path",{"d":"M15.44 3.69a9 9 0 0 0 -3.44 -.69"}],["path",{"d":"M9 9.03v.015"}],["path",{"d":"M15 15.045v.015"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9,10],"o":[12,12],"a":0.12}];

export const CircleDashedPercentageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleDashedPercentageIcon.displayName = "CircleDashedPercentageIcon";
