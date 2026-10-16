"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15"}],["path",{"d":"M16 8h2c1 0 2 1 2 2v11"}],["path",{"d":"M3 21h18"}],["path",{"d":"M10 12v.01"}],["path",{"d":"M10 16v.01"}],["path",{"d":"M10 8v.01"}],["path",{"d":"M7 12v.01"}],["path",{"d":"M7 16v.01"}],["path",{"d":"M7 8v.01"}],["path",{"d":"M17 12v.01"}],["path",{"d":"M17 16v.01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7,8,9,10],"o":[12,21],"d":[0,-1.8]}];

export const BuildingsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingsIcon.displayName = "BuildingsIcon";
