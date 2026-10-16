"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.5 14h4.5l2 -2v-6l-6.5 8"}],["path",{"d":"M9 19h5l-11 -13v6l6 7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.5],"a":0.1}];

export const BrandValorantIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandValorantIcon.displayName = "BrandValorantIcon";
