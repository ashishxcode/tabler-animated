"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6"}],["path",{"d":"M8 11v-4a4 4 0 1 1 8 0v4"}],["path",{"d":"M15 16h.01"}],["path",{"d":"M12.01 16h.01"}],["path",{"d":"M9.02 16h.01"}]];
const rig: Rig[] = [{"fx":"lift","n":[1],"o":[12,7],"a":0,"d":[0,-1.5]}];

export const LockPasswordIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LockPasswordIcon.displayName = "LockPasswordIcon";
