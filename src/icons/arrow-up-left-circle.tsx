"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15.536 15.536l-9.536 -9.536"}],["path",{"d":"M10 6h-4v4"}],["path",{"d":"M15.586 15.586a2 2 0 1 0 2.828 2.828a2 2 0 0 0 -2.828 -2.828"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12.49,12.51],"d":[-1.73,-1.73]}];

export const ArrowUpLeftCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowUpLeftCircleIcon.displayName = "ArrowUpLeftCircleIcon";
