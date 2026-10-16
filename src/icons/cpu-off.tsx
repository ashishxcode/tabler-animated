"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706a1 1 0 0 1 -.708 .294h-12a1 1 0 0 1 -1 -1v-12c0 -.272 .108 -.518 .284 -.698"}],["path",{"d":"M13 9h2v2m0 4h-6v-6"}],["path",{"d":"M3 10h2"}],["path",{"d":"M3 14h2"}],["path",{"d":"M10 3v2"}],["path",{"d":"M14 3v2"}],["path",{"d":"M21 10h-2"}],["path",{"d":"M21 14h-2"}],["path",{"d":"M14 21v-2"}],["path",{"d":"M10 21v-2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[10],"o":[12,12],"dl":0.25},{"fx":"pop","n":[7,8],"o":[17.5,17.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,9],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,12],[4,10],[4,14],[10,4],[14,4],[20,10],[10,20]]}];

export const CpuOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CpuOffIcon.displayName = "CpuOffIcon";
