"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20v-16"}],["path",{"d":"M8 4v.01"}],["path",{"d":"M12 4v.01"}],["path",{"d":"M16 4v.01"}],["path",{"d":"M20 4v.01"}],["path",{"d":"M20 8v.01"}],["path",{"d":"M20 12v.01"}],["path",{"d":"M20 16v.01"}],["path",{"d":"M8 20v.01"}],["path",{"d":"M12 20v.01"}],["path",{"d":"M16 20v.01"}],["path",{"d":"M20 20v.01"}],["path",{"d":"M9 12h6"}],["path",{"d":"M12 9v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[7,10,11],"o":[18,18.01],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[4,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,8,9,12,13],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,4.01],[12,4.01],[16,4.01],[20,4.01],[20,8],[20,12.01],[8,20.01],[12,20.01],[12,12],[12,12]]}];

export const BorderLeftPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderLeftPlusIcon.displayName = "BorderLeftPlusIcon";
