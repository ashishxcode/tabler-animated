"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 8h10v8a5 5 0 0 1 -10 0l0 -8"}],["path",{"d":"M9 8v-5h6v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,14.5],"a":0.06},{"fx":"pop","n":[1],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,5.5]]}];

export const DeviceUsbIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceUsbIcon.displayName = "DeviceUsbIcon";
