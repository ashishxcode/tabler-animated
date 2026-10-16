"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0"}],["path",{"d":"M10 12a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2l0 -7"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1],"o":[12,12],"a":-8}];

export const CircleSquareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleSquareIcon.displayName = "CircleSquareIcon";
