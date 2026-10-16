"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M14 20h6v-6a3 3 0 0 0 -6 0v6"}],["path",{"d":"M11 8v2.5a3.5 3.5 0 0 1 -3.5 3.5h-.5a3 3 0 0 1 0 -6h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.1}];

export const BrandSpaceheyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandSpaceheyIcon.displayName = "BrandSpaceheyIcon";
