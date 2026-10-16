"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 16v-8l-2 2"}],["path",{"d":"M13 16l4 -4"}],["path",{"d":"M17 16l-4 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[8,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[15,14],[15,14]]}];

export const Multiplier1xIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Multiplier1xIcon.displayName = "Multiplier1xIcon";
