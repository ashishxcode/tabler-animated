"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10"}],["path",{"d":"M7 20h10"}],["path",{"d":"M9 16v4"}],["path",{"d":"M15 16v4"}],["path",{"d":"M9 12v-4"}],["path",{"d":"M12 12v-1"}],["path",{"d":"M15 12v-2"}],["path",{"d":"M12 12v-1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,20],[9,18],[15,18],[9,10],[12,11.5],[15,11],[12,11.5]]}];

export const DeviceDesktopAnalyticsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceDesktopAnalyticsIcon.displayName = "DeviceDesktopAnalyticsIcon";
