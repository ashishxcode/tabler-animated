"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M11 18h7a2 2 0 0 0 2 -2v-7a2 2 0 0 0 -2 -2h-9.5a5.5 5.5 0 0 0 -5.5 5.5v3.5a2 2 0 0 0 2 2h2"}],["path",{"d":"M8 7l7 -3l1 3"}],["path",{"d":"M13 11.5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v2a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5l0 -2"}],["path",{"d":"M20 16h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[11.5,12.5],"a":0.06},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,18],[12,5.5],[14.5,12.5],[21,16]]}];

export const CaravanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CaravanIcon.displayName = "CaravanIcon";
