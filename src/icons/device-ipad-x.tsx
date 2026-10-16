"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 22l-5 -5"}],["path",{"d":"M17 22l5 -5"}],["path",{"d":"M13 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v9"}],["path",{"d":"M9 18h4"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[19.5,19.5],"dl":0.2,"st":0.08},{"fx":"pop","n":[2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[19.5,19.5],[11,18]]}];

export const DeviceIpadXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceIpadXIcon.displayName = "DeviceIpadXIcon";
