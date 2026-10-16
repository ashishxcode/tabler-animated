"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12c0 -4.243 0 -6.364 1.318 -7.682s3.44 -1.318 7.682 -1.318s6.364 0 7.682 1.318s1.318 3.44 1.318 7.682s0 6.364 -1.318 7.682s-3.44 1.318 -7.682 1.318s-6.364 0 -7.682 -1.318s-1.318 -3.44 -1.318 -7.682"}],["path",{"d":"M6 8l5 8"}],["path",{"d":"M6 16l5 -8"}],["path",{"d":"M18 11v4c0 1.1 -.517 .997 -1.5 .997a2.5 2.5 0 0 1 -2.5 -2.497a2.5 2.5 0 0 1 2.5 -2.5l1.5 0v-3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.1}];

export const BrandAdobeXdIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAdobeXdIcon.displayName = "BrandAdobeXdIcon";
