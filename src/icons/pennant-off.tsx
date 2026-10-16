"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 21h4"}],["path",{"d":"M10 21v-11m0 -4v-3"}],["path",{"d":"M10 4l9 4l-4.858 2.16m-2.764 1.227l-1.378 .613"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,21],[10,12],[14.5,8]]}];

export const PennantOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PennantOffIcon.displayName = "PennantOffIcon";
