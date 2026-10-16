"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 8h8v8h-8l0 -8"}],["path",{"d":"M4 4v.01"}],["path",{"d":"M8 4v.01"}],["path",{"d":"M12 4v.01"}],["path",{"d":"M16 4v.01"}],["path",{"d":"M20 4v.01"}],["path",{"d":"M4 20v.01"}],["path",{"d":"M8 20v.01"}],["path",{"d":"M12 20v.01"}],["path",{"d":"M16 20v.01"}],["path",{"d":"M20 20v.01"}],["path",{"d":"M20 16v.01"}],["path",{"d":"M20 12v.01"}],["path",{"d":"M20 8v.01"}],["path",{"d":"M4 16v.01"}],["path",{"d":"M4 12v.01"}],["path",{"d":"M4 8v.01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"o":[12,20.01],"d":[0,-1.5]}];

export const BoxMarginIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoxMarginIcon.displayName = "BoxMarginIcon";
