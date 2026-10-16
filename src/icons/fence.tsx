"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12v4h16v-4l-16 0"}],["path",{"d":"M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6"}],["path",{"d":"M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06}];

export const FenceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FenceIcon.displayName = "FenceIcon";
