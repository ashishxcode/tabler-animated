"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M13 16v5"}],["path",{"d":"M13 3v7"}],["path",{"d":"M9 7l4 -4l4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[13,12],"d":[2.4,0]}];

export const ArrowRotaryStraightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRotaryStraightIcon.displayName = "ArrowRotaryStraightIcon";
