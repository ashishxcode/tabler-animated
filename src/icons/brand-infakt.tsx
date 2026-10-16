"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.936 6.063a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M5.52 5c.002 -.033 -1.69 1.568 1.02 3.733c-1.092 2.015 .853 2.992 .853 2.992c-.972 1.879 1.39 2.805 1.39 2.805c-1 2.39 -2 4.68 -3.555 6.454c1.495 .09 2.04 -.196 2.9 -.844c3.386 -2.552 4.937 -6.471 5.765 -8.62c.385 -1.001 -.323 -2.47 -1.247 -2.964c-2.52 -1.35 -7.178 -3.526 -7.127 -3.555"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.97,12.03],"a":0.1}];

export const BrandInfaktIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandInfaktIcon.displayName = "BrandInfaktIcon";
