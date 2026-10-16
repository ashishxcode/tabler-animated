"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}],["path",{"d":"M16 3.13a4 4 0 0 1 0 7.75"}],["path",{"d":"M21 21v-2a4 4 0 0 0 -3 -3.85"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,2],"o":[12,7],"d":[0,-1.6],"st":0.1}];

export const UsersIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UsersIcon.displayName = "UsersIcon";
