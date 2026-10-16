"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19h15a4 4 0 0 0 4 -4"}],["path",{"d":"M16 15h-9a4 4 0 0 1 -4 -4v-6l1.243 1.243a6 6 0 0 0 4.242 1.757h3.515v2a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5 -1.5a1.5 1.5 0 0 1 3 0v1.5a3 3 0 0 1 -3 3"}],["path",{"d":"M15 15v4"}],["path",{"d":"M7 15v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.5,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[15,17],[7,17]]}];

export const SleighIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SleighIcon.displayName = "SleighIcon";
