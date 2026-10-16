"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 12h1"}],["path",{"d":"M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"}],["path",{"d":"M6.298 6.288a1 1 0 0 0 -.298 .712v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-8"}],["path",{"d":"M9 12h3"}],["path",{"d":"M15 15v2a1 1 0 0 0 1 1h1c.275 0 .523 -.11 .704 -.29m.296 -3.71v-7a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1v4"}],["path",{"d":"M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1"}],["path",{"d":"M22 12h-1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[2.5,12],[4.5,12],[7.5,12.14],[10.5,12],[16.5,12],[19.5,12],[21.5,12]]}];

export const BarbellOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BarbellOffIcon.displayName = "BarbellOffIcon";
