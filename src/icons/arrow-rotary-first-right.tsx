"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M8 10v10"}],["path",{"d":"M10.5 9.5l8.5 8.5"}],["path",{"d":"M14 18h5v-5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const ArrowRotaryFirstRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowRotaryFirstRightIcon.displayName = "ArrowRotaryFirstRightIcon";
