"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 6h6v-2a1 1 0 0 0 -1 -1h-6a1 1 0 0 0 -1 1"}],["path",{"d":"M16 6l1.094 1.759a6 6 0 0 1 .906 3.17v3.071m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8.071a6 6 0 0 1 .906 -3.17l.327 -.525"}],["path",{"d":"M10 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,4.5],[12,16]]}];

export const MilkOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MilkOffIcon.displayName = "MilkOffIcon";
