"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 7l-4 -4l-4 4"}],["path",{"d":"M17 3v11a3 3 0 0 1 -3 3h-11"}],["path",{"d":"M7 13l-4 4l4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[-1.73,-1.73]}];

export const ArrowsUpLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsUpLeftIcon.displayName = "ArrowsUpLeftIcon";
