"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 20v-10l10 6v-12"}],["path",{"d":"M13 7l3 -3l3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12.5,12],"d":[2.4,0]}];

export const ArrowZigZagIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowZigZagIcon.displayName = "ArrowZigZagIcon";
