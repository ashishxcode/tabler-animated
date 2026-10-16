"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M18.86 11c.088 .66 .14 1.512 .14 2a8 8 0 1 1 -8 -8h6"}],["path",{"d":"M11 9c2.489 .108 4.489 .108 6 0"}],["path",{"d":"M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -6"}],["path",{"d":"M11 13l-3.5 -1.5"}],["path",{"d":"M11 13l2.5 3"}],["path",{"d":"M8.5 16l2.5 -3"}],["path",{"d":"M11 13l3.5 -1.5"}],["path",{"d":"M11 9v4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6,7,8],"o":[12,12],"d":[2.4,0]}];

export const CarTurbineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarTurbineIcon.displayName = "CarTurbineIcon";
