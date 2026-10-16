"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6"}],["path",{"d":"M16 10v10"}],["path",{"d":"M13.5 9.5l-8.5 8.5"}],["path",{"d":"M10 18h-5v-5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[-2.4,0]}];

export const ArrowRotaryFirstLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRotaryFirstLeftIcon.displayName = "ArrowRotaryFirstLeftIcon";
