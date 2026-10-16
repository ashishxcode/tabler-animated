"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 18v-11.31a.7 .7 0 0 1 1.195 -.495l9.805 9.805"}],["path",{"d":"M13 16h5v-5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12.5,11.99],"d":[2.4,0]}];

export const ArrowSharpTurnRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowSharpTurnRightIcon.displayName = "ArrowSharpTurnRightIcon";
