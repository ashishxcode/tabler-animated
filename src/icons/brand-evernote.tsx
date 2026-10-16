"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8h5v-5"}],["path",{"d":"M17.9 19c.6 -2.5 1.1 -5.471 1.1 -9c0 -4.5 -2 -5 -3 -5c-1.906 0 -3 -.5 -3.5 -1c-.354 -.354 -.5 -1 -1.5 -1h-2l-5 5c0 6 2.5 8 5 8c1 0 1.5 -.5 2 -1.5s1.414 -.326 2.5 0c1.044 .313 2.01 .255 2.5 .5c1 .5 2 1.5 2 3c0 .5 0 3 -3 3s-3 -3 -1 -3"}],["path",{"d":"M15 10h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[11.5,12],"a":0.1}];

export const BrandEvernoteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandEvernoteIcon.displayName = "BrandEvernoteIcon";
