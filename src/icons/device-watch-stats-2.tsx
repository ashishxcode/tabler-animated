"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 9a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3l0 -6"}],["path",{"d":"M9 18v3h6v-3"}],["path",{"d":"M9 6v-3h6v3"}],["path",{"d":"M12 10a2 2 0 1 0 2 2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3],"o":[12,12],"st":0.08}];

export const DeviceWatchStats2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceWatchStats2Icon.displayName = "DeviceWatchStats2Icon";
