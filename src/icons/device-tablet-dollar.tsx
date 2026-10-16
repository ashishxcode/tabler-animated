"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 21h-7a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v6"}],["path",{"d":"M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M19 21v1m0 -8v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[19,18],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1],"o":[12,12],"a":0.14}];

export const DeviceTabletDollarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceTabletDollarIcon.displayName = "DeviceTabletDollarIcon";
