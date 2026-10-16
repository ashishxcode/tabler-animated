"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304"}],["path",{"d":"M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59l0 -.009"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[19,18.76],"a":0.35,"dl":0.2},{"fx":"beat","n":[0,1],"o":[12,12]}];

export const HomeHeartIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeHeartIcon.displayName = "HomeHeartIcon";
