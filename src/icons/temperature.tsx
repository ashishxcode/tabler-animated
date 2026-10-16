"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"}],["path",{"d":"M10 9l4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,20.96],"a":0.1}];

export const TemperatureIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TemperatureIcon.displayName = "TemperatureIcon";
