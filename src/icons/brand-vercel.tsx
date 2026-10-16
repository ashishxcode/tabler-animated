"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19h18l-9 -15l-9 15"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,11.5],"a":0.1}];

export const BrandVercelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandVercelIcon.displayName = "BrandVercelIcon";
