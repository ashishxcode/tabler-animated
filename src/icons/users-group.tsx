"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"}],["path",{"d":"M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M17 10h2a2 2 0 0 1 2 2v1"}],["path",{"d":"M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M3 13v-1a2 2 0 0 1 2 -2h2"}]];
const rig: Rig[] = [{"fx":"slide","n":[2,4],"o":[12,5],"d":[0,-1.6],"st":0.1}];

export const UsersGroupIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UsersGroupIcon.displayName = "UsersGroupIcon";
