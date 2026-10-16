"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 12h13"}],["path",{"d":"M18 9l3 3l-3 3"}],["path",{"d":"M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5l-2.5 -2.5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[2.4,0]}];

export const ArrowRightRhombusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRightRhombusIcon.displayName = "ArrowRightRhombusIcon";
