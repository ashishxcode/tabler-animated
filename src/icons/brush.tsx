"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21v-4a4 4 0 1 1 4 4h-4"}],["path",{"d":"M21 3a16 16 0 0 0 -12.8 10.2"}],["path",{"d":"M21 3a16 16 0 0 1 -10.2 12.8"}],["path",{"d":"M10.6 9a9 9 0 0 1 4.4 4.4"}]];
const rig: Rig[] = [{"fx":"write","n":[0,1,2,3],"o":[12,12]}];

export const BrushIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrushIcon.displayName = "BrushIcon";
