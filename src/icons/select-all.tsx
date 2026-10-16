"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -6"}],["path",{"d":"M12 20v.01"}],["path",{"d":"M16 20v.01"}],["path",{"d":"M8 20v.01"}],["path",{"d":"M4 20v.01"}],["path",{"d":"M4 16v.01"}],["path",{"d":"M4 12v.01"}],["path",{"d":"M4 8v.01"}],["path",{"d":"M4 4v.01"}],["path",{"d":"M8 4v.01"}],["path",{"d":"M12 4v.01"}],["path",{"d":"M16 4v.01"}],["path",{"d":"M20 4v.01"}],["path",{"d":"M20 8v.01"}],["path",{"d":"M20 12v.01"}],["path",{"d":"M20 16v.01"}],["path",{"d":"M20 20v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,20.01],[16,20.01],[8,20.01],[4,20.01],[4,16.01],[4,12.01],[4,8],[4,4.01],[8,4.01],[12,4.01],[16,4.01],[20,4.01],[20,8],[20,12.01],[20,16.01],[20,20.01]]}];

export const SelectAllIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SelectAllIcon.displayName = "SelectAllIcon";
