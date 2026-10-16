"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4"}],["path",{"d":"M9 13l3 3l-3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,13.5],"d":[2.4,0]}];

export const View360ArrowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
View360ArrowIcon.displayName = "View360ArrowIcon";
