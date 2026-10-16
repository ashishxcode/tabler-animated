"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 20v-16"}],["path",{"d":"M16 4v.01"}],["path",{"d":"M12 4v.01"}],["path",{"d":"M8 4v.01"}],["path",{"d":"M4 4v.01"}],["path",{"d":"M4 8v.01"}],["path",{"d":"M4 12v.01"}],["path",{"d":"M4 16v.01"}],["path",{"d":"M16 20v.01"}],["path",{"d":"M12 20v.01"}],["path",{"d":"M8 20v.01"}],["path",{"d":"M4 20v.01"}],["path",{"d":"M15 12h-6"}],["path",{"d":"M12 9v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[16,20.01],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[20,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,9,10,11,12,13],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,4.01],[12,4.01],[8,4.01],[4,4.01],[4,8],[4,12.01],[4,16.01],[12,20.01],[8,20.01],[4,20.01],[12,12],[12,12]]}];

export const BorderRightPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderRightPlusIcon.displayName = "BorderRightPlusIcon";
