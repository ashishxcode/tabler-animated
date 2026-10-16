"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 16v-8"}],["path",{"d":"M6 8v8"}],["path",{"d":"M2 12h4"}],["path",{"d":"M9 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8"}],["path",{"d":"M19 8a4 4 0 1 1 0 8a4 4 0 0 1 0 -8"}],["path",{"d":"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12.5,12],"a":0.1}];

export const BrandHboIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandHboIcon.displayName = "BrandHboIcon";
