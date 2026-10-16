"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 21l4 -4l-4 -4"}],["path",{"d":"M21 17h-11a3 3 0 0 1 -3 -3v-11"}],["path",{"d":"M11 7l-4 -4l-4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[1.73,-1.73]}];

export const ArrowsUpRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsUpRightIcon.displayName = "ArrowsUpRightIcon";
