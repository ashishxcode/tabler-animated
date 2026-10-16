"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 21h-5.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10c.24 0 .47 .042 .683 .12"}],["path",{"d":"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M8 11v-4a4 4 0 1 1 8 0v4"}],["path",{"d":"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879"}],["path",{"d":"M19 18v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[19,18.5],"a":0.35,"dl":0.2},{"fx":"lift","n":[2],"o":[12,7],"a":0,"d":[0,-1.5]}];

export const LockPinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LockPinIcon.displayName = "LockPinIcon";
