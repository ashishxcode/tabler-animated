"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 21h-4c0 -4.364 -1 -7 -2 -11q 4 2 8 0c-1 4 -2 6.636 -2 11"}],["path",{"d":"M11 2c0 2.5 -1 2.66 -1 4a1.9 1.9 0 0 0 2 2a1.87 1.87 0 0 0 2 -2c0 -1.41 -1 -3 -3 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,15.5],"a":0.08},{"fx":"pop","n":[1],"o":[12,5],"a":0.22,"dl":0.1}];

export const OlympicTorchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
OlympicTorchIcon.displayName = "OlympicTorchIcon";
