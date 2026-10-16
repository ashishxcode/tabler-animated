"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414"}],["path",{"d":"M6 10l-3 3l3 3l3 -3"}],["path",{"d":"M10 6l3 -3l3 3l-3 3"}],["path",{"d":"M12 12l1.5 1.5"}],["path",{"d":"M14.5 17a2.5 2.5 0 0 0 2.5 -2.5"}],["path",{"d":"M15 21a6 6 0 0 0 6 -6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[8.5,8.5],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,13],[13,6],[12.75,12.75],[15.75,15.75],[18,18]]}];

export const SatelliteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SatelliteIcon.displayName = "SatelliteIcon";
