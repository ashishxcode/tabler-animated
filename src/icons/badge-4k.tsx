"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"}],["path",{"d":"M7 9v2a1 1 0 0 0 1 1h1"}],["path",{"d":"M10 9v6"}],["path",{"d":"M14 9v6"}],["path",{"d":"M17 9l-2 3l2 3"}],["path",{"d":"M15 12h-1"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1,2,3,4,5],"o":[12,6],"a":7}];

export const Badge4kIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Badge4kIcon.displayName = "Badge4kIcon";
