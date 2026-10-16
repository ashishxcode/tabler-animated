"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20l16 0"}],["path",{"d":"M9.4 10l5.2 0"}],["path",{"d":"M7.8 15l8.4 0"}],["path",{"d":"M6 20l5 -15h2l5 15"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[12,12.5],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,10],[12,15]]}];

export const TrafficConeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrafficConeIcon.displayName = "TrafficConeIcon";
