"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 13l8 -3l8 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12,11.5],"d":[0,-1.92]}];

export const ChevronCompactUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronCompactUpIcon.displayName = "ChevronCompactUpIcon";
