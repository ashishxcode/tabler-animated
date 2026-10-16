"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-3"}],["path",{"d":"M12 5v14"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.08}];

export const AlphabetChineseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlphabetChineseIcon.displayName = "AlphabetChineseIcon";
