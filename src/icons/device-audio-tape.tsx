"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"}],["path",{"d":"M3 17l4 -3h10l4 3"}],["path",{"d":"M7 9.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M16 9.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[7.5,9.5],[16.5,9.5]]}];

export const DeviceAudioTapeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceAudioTapeIcon.displayName = "DeviceAudioTapeIcon";
