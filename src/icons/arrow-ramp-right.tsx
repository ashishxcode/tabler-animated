"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 3l0 8.707"}],["path",{"d":"M11 7l-4 -4l-4 4"}],["path",{"d":"M17 14l4 -4l-4 -4"}],["path",{"d":"M7 21a11 11 0 0 1 11 -11h3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const ArrowRampRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRampRightIcon.displayName = "ArrowRampRightIcon";
