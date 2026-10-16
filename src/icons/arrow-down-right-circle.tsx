"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8.464 8.464l9.536 9.536"}],["path",{"d":"M14 18h4v-4"}],["path",{"d":"M8.414 8.414a2 2 0 1 0 -2.828 -2.828a2 2 0 0 0 2.828 2.828"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[11.51,11.49],"d":[1.73,1.73]}];

export const ArrowDownRightCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowDownRightCircleIcon.displayName = "ArrowDownRightCircleIcon";
