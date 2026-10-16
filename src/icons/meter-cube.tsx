"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 5h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5"}],["path",{"d":"M4 12v6"}],["path",{"d":"M4 14a2 2 0 0 1 2 -2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5"}],["path",{"d":"M9 15.5v-1a2.5 2.5 0 1 1 5 0v3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,11.5],"a":0.06}];

export const MeterCubeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MeterCubeIcon.displayName = "MeterCubeIcon";
