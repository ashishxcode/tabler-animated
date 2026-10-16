"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12"}],["path",{"d":"M4 9h6l1 -2l2 4l1 -2h6"}],["path",{"d":"M4 14h16"}],["path",{"d":"M14 17v.01"}],["path",{"d":"M17 17v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[15.5,17.01],"a":0.35,"dl":0.2},{"fx":"beat","n":[0,1,2],"o":[12,12]}];

export const DeviceHeartMonitorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceHeartMonitorIcon.displayName = "DeviceHeartMonitorIcon";
