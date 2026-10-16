"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 4l3 8l-3 8"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12.5,12],"d":[1.92,0]}];

export const ChevronCompactRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronCompactRightIcon.displayName = "ChevronCompactRightIcon";
