"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 9a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M9 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M5 9v11a2 2 0 1 0 4 0v-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.1}];

export const BrandPicsartIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandPicsartIcon.displayName = "BrandPicsartIcon";
