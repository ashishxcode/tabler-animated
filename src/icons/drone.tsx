"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 10h4v4h-4l0 -4"}],["path",{"d":"M10 10l-3.5 -3.5"}],["path",{"d":"M9.96 6a3.5 3.5 0 1 0 -3.96 3.96"}],["path",{"d":"M14 10l3.5 -3.5"}],["path",{"d":"M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96"}],["path",{"d":"M14 14l3.5 3.5"}],["path",{"d":"M14.04 18a3.5 3.5 0 1 0 3.96 -3.96"}],["path",{"d":"M10 14l-3.5 3.5"}],["path",{"d":"M6 14.04a3.5 3.5 0 1 0 3.96 3.96"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,4,6,8],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,3,5,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[8.25,8.25],[15.75,8.25],[15.75,15.75],[8.25,15.75]]}];

export const DroneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DroneIcon.displayName = "DroneIcon";
