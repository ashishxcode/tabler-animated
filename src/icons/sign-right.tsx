"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 21h4"}],["path",{"d":"M10 21v-10"}],["path",{"d":"M10 6v-3"}],["path",{"d":"M6 6h10l2 2.5l-2 2.5h-10l0 -5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,21],[10,4.5]]}];

export const SignRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SignRightIcon.displayName = "SignRightIcon";
