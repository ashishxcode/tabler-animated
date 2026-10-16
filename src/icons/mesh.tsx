"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9h18"}],["path",{"d":"M3 15h18"}],["path",{"d":"M8 4c.485 .445 3.5 3.312 3.5 8c0 .663 -.07 4.848 -3.5 8"}],["path",{"d":"M15 4a17 17 0 0 1 2.004 8c0 1.51 -.201 4.628 -2.004 8"}],["path",{"d":"M18.778 20h-13.556a2.22 2.22 0 0 1 -2.222 -2.222v-11.556c0 -1.227 .995 -2.222 2.222 -2.222h13.556c1.227 0 2.222 .995 2.222 2.222v11.556a2.22 2.22 0 0 1 -2.222 2.222"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,9],[12,15],[9.75,12],[16,12]]}];

export const MeshIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MeshIcon.displayName = "MeshIcon";
