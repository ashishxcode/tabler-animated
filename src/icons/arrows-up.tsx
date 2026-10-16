"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 3l0 18"}],["path",{"d":"M4 6l3 -3l3 3"}],["path",{"d":"M20 6l-3 -3l-3 3"}],["path",{"d":"M7 3l0 18"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[0,-2.4]}];

export const ArrowsUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsUpIcon.displayName = "ArrowsUpIcon";
