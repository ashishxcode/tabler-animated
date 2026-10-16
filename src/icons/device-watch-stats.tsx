"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 9a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3l0 -6"}],["path",{"d":"M9 18v3h6v-3"}],["path",{"d":"M9 6v-3h6v3"}],["path",{"d":"M9 14v-4"}],["path",{"d":"M12 14v-1"}],["path",{"d":"M15 14v-3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[12,12],"st":0.08}];

export const DeviceWatchStatsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceWatchStatsIcon.displayName = "DeviceWatchStatsIcon";
