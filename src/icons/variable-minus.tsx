"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5"}],["path",{"d":"M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.775 3.55 2.29 7.102 1.544 11.01m-11.544 -6.01h1c1 0 1 1 2.016 3.527c.782 1.966 .943 3 1.478 3.343"}],["path",{"d":"M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12.5],[12,12.5]]}];

export const VariableMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VariableMinusIcon.displayName = "VariableMinusIcon";
