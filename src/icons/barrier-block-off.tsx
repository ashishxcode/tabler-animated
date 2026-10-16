"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 7h8a1 1 0 0 1 1 1v7c0 .27 -.107 .516 -.282 .696"}],["path",{"d":"M16 16h-11a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h2"}],["path",{"d":"M7 16v4"}],["path",{"d":"M7.5 16l4.244 -4.244"}],["path",{"d":"M13.745 9.755l2.755 -2.755"}],["path",{"d":"M13.5 16l1.249 -1.249"}],["path",{"d":"M16.741 12.759l3.259 -3.259"}],["path",{"d":"M4 13.5l4.752 -4.752"}],["path",{"d":"M17 17v3"}],["path",{"d":"M5 20h4"}],["path",{"d":"M15 20h4"}],["path",{"d":"M17 7v-2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[12],"o":[12,12],"dl":0.25},{"fx":"pop","n":[5,8,10],"o":[16.25,17.38],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,6,7,9,11],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.5,11.35],[10,11.5],[7,18],[9.62,13.88],[15.12,8.38],[18.37,11.13],[6.38,11.12],[7,20],[17,6]]}];

export const BarrierBlockOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BarrierBlockOffIcon.displayName = "BarrierBlockOffIcon";
