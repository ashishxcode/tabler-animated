"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9"}],["path",{"d":"M16 3l-4 4l-4 -4"}],["path",{"d":"M15 7v13"}],["path",{"d":"M18 15v.01"}],["path",{"d":"M18 12v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,5],[15,13.5],[18,15.01],[18,12.01]]}];

export const DeviceTvOldIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceTvOldIcon.displayName = "DeviceTvOldIcon";
