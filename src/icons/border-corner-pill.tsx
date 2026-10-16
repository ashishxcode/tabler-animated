"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20v-5c0 -6.075 4.925 -11 11 -11h5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12,12],"d":[2.4,0]}];

export const BorderCornerPillIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderCornerPillIcon.displayName = "BorderCornerPillIcon";
