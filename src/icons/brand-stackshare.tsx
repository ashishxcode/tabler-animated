"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 12h3l3.5 6h3.5"}],["path",{"d":"M17 6h-3.5l-3.5 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.1}];

export const BrandStackshareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandStackshareIcon.displayName = "BrandStackshareIcon";
