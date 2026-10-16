"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20v-15a1 1 0 0 1 1 -1h15"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12,12],"d":[2.4,0]}];

export const BorderCornerSquareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderCornerSquareIcon.displayName = "BorderCornerSquareIcon";
