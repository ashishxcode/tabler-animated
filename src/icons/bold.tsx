"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 5h6a3.5 3.5 0 0 1 0 7h-6l0 -7"}],["path",{"d":"M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.25,12],"a":0.08}];

export const BoldIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoldIcon.displayName = "BoldIcon";
