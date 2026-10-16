"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12h.5m3 0h1.5m3 0h6"}],["path",{"d":"M15 16l4 -4"}],["path",{"d":"M15 8l4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[2.4,0]}];

export const ArrowNarrowRightDashedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowNarrowRightDashedIcon.displayName = "ArrowNarrowRightDashedIcon";
