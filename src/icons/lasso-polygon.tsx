"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.028 13.252l-1.028 -3.252l2 -7l7 5l8 -3l1 9l-9 3l-5.144 -1.255"}],["path",{"d":"M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 17c0 1.42 .316 2.805 1 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,15],[5.5,19]]}];

export const LassoPolygonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LassoPolygonIcon.displayName = "LassoPolygonIcon";
