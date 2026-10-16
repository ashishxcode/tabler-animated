"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.5 17h-7.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9"}],["path",{"d":"M3 13h18"}],["path",{"d":"M8 21h3.5"}],["path",{"d":"M10 17l-.5 4"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1],"o":[12,10],"a":0.06},{"fx":"pop","n":[2,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[9.75,21],[9.75,19]]}];

export const DeviceImacCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceImacCodeIcon.displayName = "DeviceImacCodeIcon";
