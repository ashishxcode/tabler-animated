"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20v-10a6 6 0 0 1 6 -6h10"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12,12],"d":[2.4,0]}];

export const BorderCornerRoundedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderCornerRoundedIcon.displayName = "BorderCornerRoundedIcon";
