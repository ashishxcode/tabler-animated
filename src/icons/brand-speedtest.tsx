"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.636 19.364a9 9 0 1 1 12.728 0"}],["path",{"d":"M16 9l-4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,11.68],"a":0.1}];

export const BrandSpeedtestIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandSpeedtestIcon.displayName = "BrandSpeedtestIcon";
