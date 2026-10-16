"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6"}],["path",{"d":"M8 3l2 3"}],["path",{"d":"M16 3l-2 3"}],["path",{"d":"M9 13v-2"}],["path",{"d":"M15 11v2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,11.5],"a":0.1}];

export const BrandBilibiliIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandBilibiliIcon.displayName = "BrandBilibiliIcon";
