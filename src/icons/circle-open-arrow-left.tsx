"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.066 8.002a9 9 0 1 0 .934 3.998h-13"}],["path",{"d":"M12 8l-4 4l4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,11.99],"d":[-2.4,0]}];

export const CircleOpenArrowLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleOpenArrowLeftIcon.displayName = "CircleOpenArrowLeftIcon";
