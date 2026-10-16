"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 4h-8a8 8 0 1 0 0 16h8a8 8 0 0 0 -8 -8a8 8 0 0 0 8 -8"}],["path",{"d":"M4 12h8"}],["path",{"d":"M12 4v16"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.1}];

export const BrandCraftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandCraftIcon.displayName = "BrandCraftIcon";
