"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 18l18 -12h-18l9 14l9 -14v10l-18 -10l0 12"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,13],"a":0.1}];

export const BrandDcosIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandDcosIcon.displayName = "BrandDcosIcon";
