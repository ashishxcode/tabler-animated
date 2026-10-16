"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M20 16v2a2 2 0 0 1 -2 2h-2"}],["path",{"d":"M8 20h-2a2 2 0 0 1 -2 -2v-2"}],["path",{"d":"M4 8v-2a2 2 0 0 1 2 -2h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.06}];

export const BorderCornersIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderCornersIcon.displayName = "BorderCornersIcon";
