"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -14"}],["path",{"d":"M12 3v2"}],["path",{"d":"M10 15v.01"}],["path",{"d":"M10 18v.01"}],["path",{"d":"M14 18v.01"}],["path",{"d":"M14 15v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2,3,4,5,6],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,10],[12,4],[10,15.01],[10,18.01],[14,18.01],[14,15.01]]}];

export const DeviceRemoteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceRemoteIcon.displayName = "DeviceRemoteIcon";
