"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8"}],["path",{"d":"M6 12h4m-2 -2v4"}],["path",{"d":"M15 11l0 .01"}],["path",{"d":"M18 13l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[8,12],[15,11.01],[18,13.01]]}];

export const DeviceGamepadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceGamepadIcon.displayName = "DeviceGamepadIcon";
