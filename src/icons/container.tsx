"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 4v.01"}],["path",{"d":"M20 20v.01"}],["path",{"d":"M20 16v.01"}],["path",{"d":"M20 12v.01"}],["path",{"d":"M20 8v.01"}],["path",{"d":"M8 5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -14"}],["path",{"d":"M4 4v.01"}],["path",{"d":"M4 20v.01"}],["path",{"d":"M4 16v.01"}],["path",{"d":"M4 12v.01"}],["path",{"d":"M4 8v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,6,7,8,9,10],"a":0.24,"dl":0.1,"st":0.07,"os":[[20,4.01],[20,20.01],[20,16.01],[20,12.01],[20,8],[4,4.01],[4,20.01],[4,16.01],[4,12.01],[4,8]]}];

export const ContainerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ContainerIcon.displayName = "ContainerIcon";
