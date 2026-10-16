"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 9v1a3 3 0 0 0 3 3h1"}],["path",{"d":"M18 8v5a3 3 0 0 1 -.129 .872m-2.014 2a3 3 0 0 1 -.857 .124h-1"}],["path",{"d":"M10 21v-11m0 -4v-1a2 2 0 1 1 4 0v5m0 4v7"}],["path",{"d":"M7 21h10"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"sway","n":[0,1,2,3],"o":[12,21],"a":5}];

export const CactusOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CactusOffIcon.displayName = "CactusOffIcon";
