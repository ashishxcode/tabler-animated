"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 21h-7a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}],["path",{"d":"M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[3],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,17]]}];

export const DeviceTabletPauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceTabletPauseIcon.displayName = "DeviceTabletPauseIcon";
