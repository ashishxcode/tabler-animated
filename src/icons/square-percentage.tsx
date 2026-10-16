"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M9 15.037l6 -6"}],["path",{"d":"M9 9.068v.014"}],["path",{"d":"M15 15.082v.016"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3],"o":[12,12],"a":-8}];

export const SquarePercentageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquarePercentageIcon.displayName = "SquarePercentageIcon";
