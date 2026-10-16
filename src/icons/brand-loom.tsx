"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17.464 6.518a6 6 0 1 0 -3.023 7.965"}],["path",{"d":"M17.482 17.464a6 6 0 1 0 -7.965 -3.023"}],["path",{"d":"M6.54 17.482a6 6 0 1 0 3.024 -7.965"}],["path",{"d":"M6.518 6.54a6 6 0 1 0 7.965 3.024"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.1}];

export const BrandLoomIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandLoomIcon.displayName = "BrandLoomIcon";
