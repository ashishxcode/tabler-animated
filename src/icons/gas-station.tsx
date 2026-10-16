"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3"}],["path",{"d":"M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14"}],["path",{"d":"M3 20l12 0"}],["path",{"d":"M18 7v1a1 1 0 0 0 1 1h1"}],["path",{"d":"M4 11l10 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[9,12],"a":0.06},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,11.75],[9,20],[19,8],[9,11]]}];

export const GasStationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GasStationIcon.displayName = "GasStationIcon";
