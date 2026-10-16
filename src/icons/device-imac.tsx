"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12"}],["path",{"d":"M3 13h18"}],["path",{"d":"M8 21h8"}],["path",{"d":"M10 17l-.5 4"}],["path",{"d":"M14 17l.5 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,10],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,21],[9.75,19],[14.25,19]]}];

export const DeviceImacIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceImacIcon.displayName = "DeviceImacIcon";
