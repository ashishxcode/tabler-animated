"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5"}]];
const rig: Rig[] = [{"fx":"spin","n":[0],"o":[12.02,12.04],"a":360}];

export const RotateClockwiseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RotateClockwiseIcon.displayName = "RotateClockwiseIcon";
