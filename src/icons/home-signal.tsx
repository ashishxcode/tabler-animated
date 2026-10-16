"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 22v-2"}],["path",{"d":"M18 22v-4"}],["path",{"d":"M21 22v-6"}],["path",{"d":"M19 12.494v-.494h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v.5"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,4],"st":0.13,"os":[[15,21],[18,20],[21,19],[12,17]]}];

export const HomeSignalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeSignalIcon.displayName = "HomeSignalIcon";
