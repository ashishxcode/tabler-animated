"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 21v-13a4 4 0 1 1 4 4h-13"}],["path",{"d":"M8 16l-4 -4l4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12.5,12.5],"d":[-2.4,0]}];

export const ArrowLoopLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowLoopLeftIcon.displayName = "ArrowLoopLeftIcon";
