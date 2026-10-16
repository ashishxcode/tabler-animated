"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20v-14a2 2 0 0 1 2 -2h14"}],["path",{"d":"M20 8v.01"}],["path",{"d":"M20 12v.01"}],["path",{"d":"M20 16v.01"}],["path",{"d":"M8 20v.01"}],["path",{"d":"M12 20v.01"}],["path",{"d":"M16 20v.01"}],["path",{"d":"M20 20v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[20,8],[20,12.01],[20,16.01],[8,20.01],[12,20.01],[16,20.01],[20,20.01]]}];

export const BorderStyleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderStyleIcon.displayName = "BorderStyleIcon";
