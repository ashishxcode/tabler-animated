"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 11a2 2 0 0 1 2 2m3 3v-7l-3 -3"}],["path",{"d":"M4 20v-14c0 -.548 .22 -1.044 .577 -1.405m3.423 -.595h4a2 2 0 0 1 2 2v4m0 4v6"}],["path",{"d":"M3 20h12"}],["path",{"d":"M18 7v1a1 1 0 0 0 1 1h1"}],["path",{"d":"M4 11h7"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[17.5,11],[9,12],[9,20],[19,8],[7.5,11]]}];

export const GasStationOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GasStationOffIcon.displayName = "GasStationOffIcon";
