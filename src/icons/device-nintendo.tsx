"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3"}],["path",{"d":"M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3"}],["path",{"d":"M16.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0","fill":"currentColor"}],["path",{"d":"M5.5 8.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0","fill":"currentColor"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[17.5,15.5],[6.5,8.5]]}];

export const DeviceNintendoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceNintendoIcon.displayName = "DeviceNintendoIcon";
