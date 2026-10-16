"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 18h6a3 3 0 0 0 3 -3v-10l-4 4m8 0l-4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12.5,11.5],"d":[1.73,-1.73]}];

export const CornerRightUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CornerRightUpIcon.displayName = "CornerRightUpIcon";
