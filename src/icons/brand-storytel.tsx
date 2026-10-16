"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.103 22c2.292 -2.933 16.825 -2.43 16.825 -11.538c0 -6.298 -4.974 -8.462 -8.451 -8.462c-3.477 0 -9.477 3.036 -9.477 11.241c0 6.374 1.103 8.759 1.103 8.759"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.96,12],"a":0.1}];

export const BrandStorytelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandStorytelIcon.displayName = "BrandStorytelIcon";
