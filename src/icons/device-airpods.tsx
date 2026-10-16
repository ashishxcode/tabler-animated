"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 4a4 4 0 0 1 4 3.8l0 .2v10.5a1.5 1.5 0 0 1 -3 0v-6.5h-1a4 4 0 0 1 -4 -3.8l0 -.2a4 4 0 0 1 4 -4"}],["path",{"d":"M18 4a4 4 0 0 0 -4 3.8l0 .2v10.5a1.5 1.5 0 0 0 3 0v-6.5h1a4 4 0 0 0 4 -3.8l0 -.2a4 4 0 0 0 -4 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06}];

export const DeviceAirpodsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceAirpodsIcon.displayName = "DeviceAirpodsIcon";
