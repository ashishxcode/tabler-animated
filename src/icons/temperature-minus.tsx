"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"}],["path",{"d":"M8 9l4 0"}],["path",{"d":"M16 9l6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[14,20.96],"a":0.1}];

export const TemperatureMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TemperatureMinusIcon.displayName = "TemperatureMinusIcon";
