"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 8v8h-8"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12,12],"d":[1.38,1.38]}];

export const ChevronDownRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronDownRightIcon.displayName = "ChevronDownRightIcon";
