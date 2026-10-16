"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 6l-6 6l6 6"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12,12],"d":[-1.92,0]}];

export const ChevronLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronLeftIcon.displayName = "ChevronLeftIcon";
