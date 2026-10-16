"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5"}],["path",{"d":"M3 13h13"}],["path",{"d":"M8 21h4.5"}],["path",{"d":"M10 17l-.5 4"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.22,"dl":0.1,"st":0.07,"os":[[9.5,13],[10.25,21],[9.75,19],[19,19],[19,17.5]]}];

export const DeviceImacUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceImacUpIcon.displayName = "DeviceImacUpIcon";
