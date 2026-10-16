"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 6v6a3 3 0 0 1 -3 3h-10l4 -4m0 8l-4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[11.5,12.5],"d":[-1.73,1.73]}];

export const CornerDownLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CornerDownLeftIcon.displayName = "CornerDownLeftIcon";
