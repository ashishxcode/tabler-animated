"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[11.5,13],"d":[2.4,0]}];

export const ArrowForwardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowForwardIcon.displayName = "ArrowForwardIcon";
