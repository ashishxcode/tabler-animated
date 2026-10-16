"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,18],"a":0.1}];

export const TemperatureCelsiusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TemperatureCelsiusIcon.displayName = "TemperatureCelsiusIcon";
