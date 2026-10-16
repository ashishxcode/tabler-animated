"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15.998 3.934a9 9 0 1 1 -3.998 -.934v13"}],["path",{"d":"M16 12l-4 4l-4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12.01,12],"d":[0,2.4]}];

export const CircleOpenArrowDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleOpenArrowDownIcon.displayName = "CircleOpenArrowDownIcon";
