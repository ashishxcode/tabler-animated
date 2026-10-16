"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8.464 15.536l9.536 -9.536"}],["path",{"d":"M18 10v-4h-4"}],["path",{"d":"M8.414 15.586a2 2 0 1 0 -2.828 2.828a2 2 0 0 0 2.828 -2.828"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[11.49,12.49],"d":[1.73,-1.73]}];

export const ArrowUpRightCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowUpRightCircleIcon.displayName = "ArrowUpRightCircleIcon";
