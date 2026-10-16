"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1"}],["path",{"d":"M10 4l-2 4h3l-2 4"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2,3],"o":[12,11.5]}];

export const ScooterElectricIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScooterElectricIcon.displayName = "ScooterElectricIcon";
