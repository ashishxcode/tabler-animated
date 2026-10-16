"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"}],["path",{"d":"M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1"}],["path",{"d":"M7 15v-6"}],["path",{"d":"M10 15v-6"}],["path",{"d":"M7 12h3"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1,2,3,4],"o":[12,6],"a":7}];

export const BadgeHdIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BadgeHdIcon.displayName = "BadgeHdIcon";
