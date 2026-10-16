"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 18v-11.31a.7 .7 0 0 0 -1.195 -.495l-9.805 9.805"}],["path",{"d":"M11 16h-5v-5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11.5,11.99],"d":[-2.4,0]}];

export const ArrowSharpTurnLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowSharpTurnLeftIcon.displayName = "ArrowSharpTurnLeftIcon";
