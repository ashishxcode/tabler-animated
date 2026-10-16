"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 6l2 1.5l6 .5l6 -.5l2 -1.5"}],["path",{"d":"M16 21l-4 -8v-5"}],["path",{"d":"M8 21l4 -8"}],["path",{"d":"M9.007 10.999c-2.37 .32 -4.007 1.201 -4.007 2.001c0 1.105 3.134 2 7 2s7 -.895 7 -2c0 -.798 -1.636 -1.679 -4 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,4],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[0,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[10,17]]}];

export const HulaHoopIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HulaHoopIcon.displayName = "HulaHoopIcon";
