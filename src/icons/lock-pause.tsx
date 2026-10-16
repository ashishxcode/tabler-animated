"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v.5"}],["path",{"d":"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M8 11v-4a4 4 0 1 1 8 0v4"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"lift","n":[2],"o":[12,7],"a":0,"d":[0,-1.5]}];

export const LockPauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LockPauseIcon.displayName = "LockPauseIcon";
