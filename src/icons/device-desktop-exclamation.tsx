"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 16h-11a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7"}],["path",{"d":"M7 20h8"}],["path",{"d":"M9 16v4"}],["path",{"d":"M15 16v4"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4,5],"o":[17,19.01],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[1,2],"a":0.22,"dl":0.1,"st":0.07,"os":[[11,20],[9,18]]}];

export const DeviceDesktopExclamationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceDesktopExclamationIcon.displayName = "DeviceDesktopExclamationIcon";
