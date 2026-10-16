"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 14a6 5 0 1 0 12 0a6 5 0 1 0 -12 0"}],["path",{"d":"M14 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 16l9 -6.5"}],["path",{"d":"M6 9h9"}],["path",{"d":"M13 5l5.65 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.1}];

export const BrandBlenderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandBlenderIcon.displayName = "BrandBlenderIcon";
