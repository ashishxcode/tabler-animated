"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12.5,13],"d":[-2.4,0]}];

export const ArrowBackIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBackIcon.displayName = "ArrowBackIcon";
