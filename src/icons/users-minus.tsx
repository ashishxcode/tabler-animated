"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}],["path",{"d":"M3 21v-2a4 4 0 0 1 4 -4h4c.948 0 1.818 .33 2.504 .88"}],["path",{"d":"M16 3.13a4 4 0 0 1 0 7.75"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0,1],"o":[8.25,12],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[17.5,7]]}];

export const UsersMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UsersMinusIcon.displayName = "UsersMinusIcon";
