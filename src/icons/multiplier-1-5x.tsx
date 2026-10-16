"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 16v-8l-2 2"}],["path",{"d":"M10 16h2a2 2 0 1 0 0 -4h-2v-4h4"}],["path",{"d":"M7 16v.01"}],["path",{"d":"M17 16l4 -4"}],["path",{"d":"M21 16l-4 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[8,12],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,16.01],[19,14],[19,14]]}];

export const Multiplier15xIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Multiplier15xIcon.displayName = "Multiplier15xIcon";
