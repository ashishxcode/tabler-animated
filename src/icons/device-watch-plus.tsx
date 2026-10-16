"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}],["path",{"d":"M9 18v3h3.5"}],["path",{"d":"M9 6v-3h6v3"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[3,4],"a":0.22,"dl":0.1,"st":0.07,"os":[[10.75,19.5],[12,4.5]]}];

export const DeviceWatchPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceWatchPlusIcon.displayName = "DeviceWatchPlusIcon";
