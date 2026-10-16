"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 20l-3 -8l3 -8"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[11.5,12],"d":[-1.92,0]}];

export const ChevronCompactLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronCompactLeftIcon.displayName = "ChevronCompactLeftIcon";
