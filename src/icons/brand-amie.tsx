"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8.5c0 1.33 .472 2.55 1.257 3.5a5.5 5.5 0 0 0 7.743 7.743a5.5 5.5 0 0 0 7.743 -7.743a5.5 5.5 0 0 0 -7.743 -7.743a5.5 5.5 0 0 0 -9 4.243"}],["path",{"d":"M10 9.5c0 -.828 .895 -1.5 2 -1.5s2 .672 2 1.5v5c0 .828 -.895 1.5 -2 1.5s-2 -.672 -2 -1.5l0 -5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.1}];

export const BrandAmieIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAmieIcon.displayName = "BrandAmieIcon";
