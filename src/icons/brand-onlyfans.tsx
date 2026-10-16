"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8.5 6a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0 -13"}],["path",{"d":"M8.5 15a2.5 2.5 0 1 1 0 -5a2.5 2.5 0 0 1 0 5"}],["path",{"d":"M14 16c2.5 0 6.42 -1.467 7 -4h-6c3 -1 6.44 -3.533 7 -6h-4c-3.03 0 -3.764 -.196 -5 1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12.5],"a":0.1}];

export const BrandOnlyfansIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandOnlyfansIcon.displayName = "BrandOnlyfansIcon";
