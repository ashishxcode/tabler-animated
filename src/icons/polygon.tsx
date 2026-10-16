"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M13 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6.5 9.5l3.5 -3"}],["path",{"d":"M14 5.5l3 1.5"}],["path",{"d":"M18.5 10l-2.5 7"}],["path",{"d":"M13.5 17.5l-7 -5"}]];
const rig: Rig[] = [{"fx":"pop","n":[6,7],"o":[12.5,13.75],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[19,8],[5,11],[15,19],[8.25,8],[15.5,6.25]]}];

export const PolygonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PolygonIcon.displayName = "PolygonIcon";
