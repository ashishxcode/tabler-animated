"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 16h2a2 2 0 1 0 0 -4h-2v-4h4"}],["path",{"d":"M5 16v.01"}],["path",{"d":"M15 16l4 -4"}],["path",{"d":"M19 16l-4 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[10,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,16.01],[17,14],[17,14]]}];

export const Multiplier05xIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Multiplier05xIcon.displayName = "Multiplier05xIcon";
