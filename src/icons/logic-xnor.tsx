"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 12h-2"}],["path",{"d":"M2 9h4"}],["path",{"d":"M2 15h4"}],["path",{"d":"M5 19c1.778 -4.667 1.778 -9.333 0 -14"}],["path",{"d":"M8 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14"}],["path",{"d":"M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[10.5,12],"a":0.06},{"fx":"pop","n":[0,1,2,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[21,12],[4,9],[4,15],[18,12]]}];

export const LogicXnorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LogicXnorIcon.displayName = "LogicXnorIcon";
