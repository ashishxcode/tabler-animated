"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 18h3"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}],["path",{"d":"M13.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[13,12],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.22,"dl":0.1,"st":0.07,"os":[[10.5,18],[19,19],[19,17.5]]}];

export const DeviceIpadUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceIpadUpIcon.displayName = "DeviceIpadUpIcon";
