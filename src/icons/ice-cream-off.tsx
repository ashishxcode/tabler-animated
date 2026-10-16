"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21.5v-4.5"}],["path",{"d":"M8 8v9h8v-1m0 -4v-5a4 4 0 0 0 -7.277 -2.294"}],["path",{"d":"M8 10.5l1.74 -.76m2.79 -1.222l3.47 -1.518"}],["path",{"d":"M8 14.5l4.488 -1.964"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,19.25],[12,10],[12,8.75],[10.24,13.52]]}];

export const IceCreamOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IceCreamOffIcon.displayName = "IceCreamOffIcon";
