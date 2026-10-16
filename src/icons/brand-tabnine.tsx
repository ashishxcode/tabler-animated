"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 12l-12 6.75m12 -6.75l-12 -6.75m12 6.75v-4.527l-8 -4.473l-4 2.25m12 6.75v4.5l-8 4.5l-4 -2.25m0 -13.5l-4 2.222v9.028l4 2.25l12 -6.75"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.1}];

export const BrandTabnineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandTabnineIcon.displayName = "BrandTabnineIcon";
