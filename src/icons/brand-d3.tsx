"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4h1.8c3.976 0 7.2 3.582 7.2 8s-3.224 8 -7.2 8h-1.8"}],["path",{"d":"M12 4h5.472c1.948 0 3.528 1.79 3.528 4s-1.58 4 -3.528 4"}],["path",{"d":"M17.472 12h-2.472"}],["path",{"d":"M17.472 12h-2.352"}],["path",{"d":"M17.472 12c1.948 0 3.528 1.79 3.528 4s-1.58 4 -3.528 4h-5.472"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.1}];

export const BrandD3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandD3Icon.displayName = "BrandD3Icon";
