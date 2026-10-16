"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1.5"}],["path",{"d":"M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"}],["path",{"d":"M16 9h2"}],["path",{"d":"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M19 21v1m0 -8v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[19,18],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2],"o":[12,11.5],"a":0.14}];

export const DevicesDollarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DevicesDollarIcon.displayName = "DevicesDollarIcon";
