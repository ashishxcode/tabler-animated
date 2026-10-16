"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M13 12l5 0"}],["path",{"d":"M20 6h-6a1 1 0 0 0 -1 1v11"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,18],"a":0.1}];

export const TemperatureFahrenheitIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TemperatureFahrenheitIcon.displayName = "TemperatureFahrenheitIcon";
