"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 11l5 -5l5 5"}],["path",{"d":"M7 17l5 -5l5 5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,11.5],"d":[0,-1.92]}];

export const ChevronsUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronsUpIcon.displayName = "ChevronsUpIcon";
