"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21v-13a4 4 0 1 0 -4 4h13"}],["path",{"d":"M17 16l4 -4l-4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12.5,12.5],"d":[2.4,0]}];

export const ArrowLoopRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowLoopRightIcon.displayName = "ArrowLoopRightIcon";
