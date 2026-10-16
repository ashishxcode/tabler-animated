"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 7h8v8"}],["path",{"d":"M5 11h8v8"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11,13],"d":[1.38,-1.38]}];

export const ChevronsUpRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronsUpRightIcon.displayName = "ChevronsUpRightIcon";
