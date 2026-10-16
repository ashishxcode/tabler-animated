"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"}],["path",{"d":"M6 9h4"}],["path",{"d":"M8 9v6"}],["path",{"d":"M13 15v-6l2 3l2 -3v6"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1,2,3],"o":[12,6],"a":7}];

export const BadgeTmIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BadgeTmIcon.displayName = "BadgeTmIcon";
