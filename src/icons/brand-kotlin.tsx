"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 20h-16v-16h16"}],["path",{"d":"M4 20l16 -16"}],["path",{"d":"M4 12l8 -8"}],["path",{"d":"M12 12l8 8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.1}];

export const BrandKotlinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandKotlinIcon.displayName = "BrandKotlinIcon";
