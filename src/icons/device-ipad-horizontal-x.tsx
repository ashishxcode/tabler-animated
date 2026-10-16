"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.5 20h-8.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7"}],["path",{"d":"M22 22l-5 -5"}],["path",{"d":"M17 22l5 -5"}],["path",{"d":"M9 17h4"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[19.5,19.5],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[3],"a":0.22,"dl":0.1,"st":0.07,"os":[[11,17]]}];

export const DeviceIpadHorizontalXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceIpadHorizontalXIcon.displayName = "DeviceIpadHorizontalXIcon";
