"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6"}],["path",{"d":"M16 10v10"}],["path",{"d":"M13 7h-10"}],["path",{"d":"M7 11l-4 -4l4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[11,11.5],"d":[-2.4,0]}];

export const ArrowRotaryLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRotaryLeftIcon.displayName = "ArrowRotaryLeftIcon";
