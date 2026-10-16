"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 20v-16l10 16v-16"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.12}];

export const LetterNIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LetterNIcon.displayName = "LetterNIcon";
