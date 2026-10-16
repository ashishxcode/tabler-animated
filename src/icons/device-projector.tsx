"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 9a5 5 0 1 0 10 0a5 5 0 0 0 -10 0"}],["path",{"d":"M9 6h-4a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-2"}],["path",{"d":"M6 15h1"}],["path",{"d":"M7 18l-1 2"}],["path",{"d":"M18 18l1 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2,3,4],"a":0.22,"dl":0.1,"st":0.07,"os":[[13,9],[6.5,15],[6.5,19],[18.5,19]]}];

export const DeviceProjectorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceProjectorIcon.displayName = "DeviceProjectorIcon";
