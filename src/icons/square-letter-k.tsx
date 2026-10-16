"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M10 8v8"}],["path",{"d":"M14 8l-2.5 4l2.5 4"}],["path",{"d":"M10 12h1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.12}];

export const SquareLetterKIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareLetterKIcon.displayName = "SquareLetterKIcon";
