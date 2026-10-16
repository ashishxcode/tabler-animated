"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M10 8l4 8"}],["path",{"d":"M10 16l4 -8"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[12,12],"dl":0.05,"st":0.1},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const SquareLetterXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareLetterXIcon.displayName = "SquareLetterXIcon";
