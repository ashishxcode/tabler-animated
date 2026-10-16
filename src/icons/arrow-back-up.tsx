"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 14l-4 -4l4 -4"}],["path",{"d":"M5 10h11a4 4 0 1 1 0 8h-1"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12.5,12],"d":[-2.4,0]}];

export const ArrowBackUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBackUpIcon.displayName = "ArrowBackUpIcon";
