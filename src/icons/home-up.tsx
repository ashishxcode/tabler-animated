"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771"}],["path",{"d":"M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h6.344"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12.5,22],"d":[0,-1.8]}];

export const HomeUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeUpIcon.displayName = "HomeUpIcon";
