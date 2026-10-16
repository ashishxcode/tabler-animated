"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5"}],["path",{"d":"M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10"}],["path",{"d":"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M8 11v-4a4 4 0 1 1 8 0v4"}]];
const rig: Rig[] = [{"fx":"lift","n":[3],"o":[12,7],"a":0,"d":[0,-1.5]}];

export const LockBitcoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LockBitcoinIcon.displayName = "LockBitcoinIcon";
