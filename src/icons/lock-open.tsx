"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6"}],["path",{"d":"M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8 11v-5a4 4 0 0 1 8 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[12,11.5],"a":-12}];

export const LockOpenIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LockOpenIcon.displayName = "LockOpenIcon";
