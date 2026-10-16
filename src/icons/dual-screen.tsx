"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 4l8 3v15l-8 -3l0 -15"}],["path",{"d":"M13 19h6v-15h-14"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,13],"a":0.08}];

export const DualScreenIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DualScreenIcon.displayName = "DualScreenIcon";
