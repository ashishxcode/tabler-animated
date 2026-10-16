"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19 17a3 3 0 0 0 -3 -3h-3.4"}],["path",{"d":"M3 3h1a2 2 0 0 1 2 2v6"}],["path",{"d":"M6 8h11"}],["path",{"d":"M15 8v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,4],"o":[10,14.5],"a":0.06},{"fx":"pop","n":[1,2,3,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,19],[15.8,15.5],[4.5,7],[15,11]]}];

export const WheelchairIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WheelchairIcon.displayName = "WheelchairIcon";
