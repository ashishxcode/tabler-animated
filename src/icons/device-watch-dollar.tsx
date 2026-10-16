"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 18h-4a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v1"}],["path",{"d":"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M19 21v1m0 -8v1"}],["path",{"d":"M9 18v3h4"}],["path",{"d":"M9 6v-3h6v3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[19,18],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,3,4],"o":[12,12],"a":0.14}];

export const DeviceWatchDollarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceWatchDollarIcon.displayName = "DeviceWatchDollarIcon";
