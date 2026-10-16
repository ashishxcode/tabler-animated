"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M8 10v10"}],["path",{"d":"M17 11l4 -4l-4 -4"}],["path",{"d":"M11 7h10"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[13,11.5],"d":[2.4,0]}];

export const ArrowRotaryRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRotaryRightIcon.displayName = "ArrowRotaryRightIcon";
