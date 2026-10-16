"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1 -5 5h-6v-16"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.5,12],"a":0.12}];

export const LetterDIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LetterDIcon.displayName = "LetterDIcon";
