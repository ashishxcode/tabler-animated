"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 17h-8l-3.5 -5h-6.5"}],["path",{"d":"M21 7h-8l-3.495 5"}],["path",{"d":"M18 10l3 -3l-3 -3"}],["path",{"d":"M18 20l3 -3l-3 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const ArrowsSplitIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsSplitIcon.displayName = "ArrowsSplitIcon";
