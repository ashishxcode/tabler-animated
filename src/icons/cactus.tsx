"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 9v1a3 3 0 0 0 3 3h1"}],["path",{"d":"M18 8v5a3 3 0 0 1 -3 3h-1"}],["path",{"d":"M10 21v-16a2 2 0 1 1 4 0v16"}],["path",{"d":"M7 21h10"}]];
const rig: Rig[] = [{"fx":"sway","n":[0,1,2,3],"o":[12,21],"a":5}];

export const CactusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CactusIcon.displayName = "CactusIcon";
