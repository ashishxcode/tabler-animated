"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.1}];

export const BrandTelegramIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandTelegramIcon.displayName = "BrandTelegramIcon";
