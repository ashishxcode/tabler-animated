"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 16h-9a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}],["path",{"d":"M7 20h6"}],["path",{"d":"M9 16v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[3,4],"a":0.22,"dl":0.1,"st":0.07,"os":[[10,20],[9,18]]}];

export const DeviceDesktopPauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceDesktopPauseIcon.displayName = "DeviceDesktopPauseIcon";
