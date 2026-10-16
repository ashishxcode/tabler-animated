"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M5.369 14.236c-1.839 -3.929 -1.561 -7.616 -.704 -11.236"}],["path",{"d":"M18.63 9.76c1.837 3.928 1.561 7.615 .703 11.236"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[4.68,8.62],[19.31,15.38]]}];

export const StormIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StormIcon.displayName = "StormIcon";
