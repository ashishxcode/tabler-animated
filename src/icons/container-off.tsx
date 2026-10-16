"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 4v.01"}],["path",{"d":"M20 20v.01"}],["path",{"d":"M20 16v.01"}],["path",{"d":"M20 12v.01"}],["path",{"d":"M20 8v.01"}],["path",{"d":"M8.297 4.289a1 1 0 0 1 .703 -.289h6a1 1 0 0 1 1 1v7m0 4v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-11"}],["path",{"d":"M4 4v.01"}],["path",{"d":"M4 20v.01"}],["path",{"d":"M4 16v.01"}],["path",{"d":"M4 12v.01"}],["path",{"d":"M4 8v.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[11],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1,2],"o":[20,18.01],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,3,4,5,6,7,8,9,10],"a":0.24,"dl":0.1,"st":0.07,"os":[[20,4.01],[20,12.01],[20,8],[12,12],[4,4.01],[4,20.01],[4,16.01],[4,12.01],[4,8]]}];

export const ContainerOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ContainerOffIcon.displayName = "ContainerOffIcon";
