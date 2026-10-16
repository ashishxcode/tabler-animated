"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"}],["path",{"d":"M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"}],["path",{"d":"M11.5 11.5l4.9 5"}],["path",{"d":"M16.5 11.5l-5.1 5"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[13.95,14],"dl":0.2,"st":0.08},{"fx":"pop","n":[0,1],"o":[12,12],"a":0.04}];

export const CopyXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CopyXIcon.displayName = "CopyXIcon";
