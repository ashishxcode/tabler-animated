"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 3h-2l-3 9"}],["path",{"d":"M16 3h2l3 9"}],["path",{"d":"M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18"}],["path",{"d":"M7 16h1"}],["path",{"d":"M16 16h1"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4],"o":[12,11.5],"a":-8}];

export const StereoGlassesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StereoGlassesIcon.displayName = "StereoGlassesIcon";
