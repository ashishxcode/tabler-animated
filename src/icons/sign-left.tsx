"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 21h-4"}],["path",{"d":"M14 21v-10"}],["path",{"d":"M14 6v-3"}],["path",{"d":"M18 6h-10l-2 2.5l2 2.5h10l0 -5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[14,21],[14,4.5]]}];

export const SignLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SignLeftIcon.displayName = "SignLeftIcon";
