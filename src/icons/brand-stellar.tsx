"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 6l-17 7v-1c-.004 -1.259 .234 -2.5 .81 -3.62c1.363 -2.686 4.178 -4.378 7.19 -4.38a7.5 7.5 0 0 1 2.61 .46"}],["path",{"d":"M9.38 19.54a8 8 0 0 0 9.81 -3.92c.576 -1.12 .814 -2.361 .81 -3.62v-1l-17 7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.1}];

export const BrandStellarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandStellarIcon.displayName = "BrandStellarIcon";
