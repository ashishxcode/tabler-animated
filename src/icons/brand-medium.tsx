"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12"}],["path",{"d":"M8 9h1l3 3l3 -3h1"}],["path",{"d":"M8 15l2 0"}],["path",{"d":"M14 15l2 0"}],["path",{"d":"M9 9l0 6"}],["path",{"d":"M15 9l0 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12,12],"a":0.1}];

export const BrandMediumIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandMediumIcon.displayName = "BrandMediumIcon";
