"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 18v-6a3 3 0 0 0 -3 -3h-10l4 -4m0 8l-4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[11.5,11.5],"d":[-1.73,-1.73]}];

export const CornerUpLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CornerUpLeftIcon.displayName = "CornerUpLeftIcon";
