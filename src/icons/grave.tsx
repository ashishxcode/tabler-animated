"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14"}],["path",{"d":"M10 16v-5h-4v-4h4v-4h4v4h4v4h-4v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.08}];

export const GraveIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GraveIcon.displayName = "GraveIcon";
