"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 15v-8h8"}],["path",{"d":"M11 19v-8h8"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[13,13],"d":[-1.38,-1.38]}];

export const ChevronsUpLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronsUpLeftIcon.displayName = "ChevronsUpLeftIcon";
