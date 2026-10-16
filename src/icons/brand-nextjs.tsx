"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"}],["path",{"d":"M15 12v-3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.01],"a":0.1}];

export const BrandNextjsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandNextjsIcon.displayName = "BrandNextjsIcon";
