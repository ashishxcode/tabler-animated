"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}],["path",{"d":"M9 18v3h3"}],["path",{"d":"M9 6v-3h6v3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[3,4],"a":0.22,"dl":0.1,"st":0.07,"os":[[10.5,19.5],[12,4.5]]}];

export const DeviceWatchCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceWatchCodeIcon.displayName = "DeviceWatchCodeIcon";
