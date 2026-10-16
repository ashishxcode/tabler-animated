"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0"}],["path",{"d":"M16 7l-1.5 -1.5"}],["path",{"d":"M13 10l-1.5 -1.5"}],["path",{"d":"M10 13l-1.5 -1.5"}],["path",{"d":"M7 17l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[11.91,20],"a":0.1}];

export const ThermometerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ThermometerIcon.displayName = "ThermometerIcon";
