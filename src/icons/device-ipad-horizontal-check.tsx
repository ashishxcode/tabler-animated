"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7"}],["path",{"d":"M15 19l2 2l4 -4"}],["path",{"d":"M9 17h2.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[2],"a":0.22,"dl":0.1,"st":0.07,"os":[[10.25,17]]}];

export const DeviceIpadHorizontalCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceIpadHorizontalCheckIcon.displayName = "DeviceIpadHorizontalCheckIcon";
