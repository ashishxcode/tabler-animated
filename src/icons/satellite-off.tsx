"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.707 3.707l5.586 5.586m-1.293 2.707l-1.293 1.293a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414l1.293 -1.293"}],["path",{"d":"M6 10l-3 3l3 3l3 -3"}],["path",{"d":"M10 6l3 -3l3 3l-3 3"}],["path",{"d":"M12 12l1.5 1.5"}],["path",{"d":"M14.5 17c.69 0 1.316 -.28 1.769 -.733"}],["path",{"d":"M15 21c1.654 0 3.151 -.67 4.237 -1.752m1.507 -2.507a6 6 0 0 0 .256 -1.741"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3,4,5],"o":[16.5,16.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.35,8.65],[6,13],[13,6]]}];

export const SatelliteOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SatelliteOffIcon.displayName = "SatelliteOffIcon";
