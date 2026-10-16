"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.07 20l-4.84 -4.617a.79 .79 0 0 1 -.065 -1.041l2.835 -3.342"}],["path",{"d":"M9 20h-5"}],["path",{"d":"M6.398 8.063l-1.302 -.896a.95 .95 0 0 0 -1.318 .245l-.611 .889a.95 .95 0 0 0 .245 1.318l1.302 .896c1.041 .716 .635 3.505 2.735 4.949l4.551 -6.62c-2.067 -1.42 -4.559 -.065 -5.602 -.781"}],["path",{"d":"M9 4h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-7"}],["path",{"d":"M13 20h4"}],["path",{"d":"M15 16v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[15,10],"a":0.06},{"fx":"pop","n":[0,1,2,4,5],"a":0.22,"dl":0.1,"st":0.07,"os":[[4.53,15.5],[6.5,20],[7.5,11.23],[15,20],[15,18]]}];

export const DeviceWorkstationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceWorkstationIcon.displayName = "DeviceWorkstationIcon";
