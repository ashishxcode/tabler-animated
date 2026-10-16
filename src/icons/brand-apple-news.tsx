"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 14l6 6h-6l0 -6"}],["path",{"d":"M20 10l-6 -6h6l0 6"}],["path",{"d":"M4 4v4l12 12h4v-4l-12 -12l-4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.1}];

export const BrandAppleNewsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAppleNewsIcon.displayName = "BrandAppleNewsIcon";
