"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.5 4c-1.465 0 -2.5 1.101 -2.5 2.5s1.035 2.5 2.5 2.5h2.5l-4.637 7.19a2.434 2.434 0 0 0 -.011 2.538c.473 .787 1.35 1.272 2.3 1.272h10.848c1.465 0 2.5 -1.101 2.5 -2.5s-1.035 -2.5 -2.5 -2.5h-2.5l7 -11h-15.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.1}];

export const BrandZwiftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandZwiftIcon.displayName = "BrandZwiftIcon";
