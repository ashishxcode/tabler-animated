"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1"}],["path",{"d":"M9 11h3v6"}],["path",{"d":"M15 17v.01"}],["path",{"d":"M15 14v.01"}],["path",{"d":"M15 11v.01"}],["path",{"d":"M9 14v.01"}],["path",{"d":"M9 17v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.22,"dl":0.1,"st":0.07,"os":[[10.5,14],[15,17.01],[15,14.01],[15,11.01],[9,14.01],[9,17.01]]}];

export const DeviceSimIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceSimIcon.displayName = "DeviceSimIcon";
