"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10l0 6"}],["path",{"d":"M20 10l0 6"}],["path",{"d":"M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0"}],["path",{"d":"M8 3l1 2"}],["path",{"d":"M16 3l-1 2"}],["path",{"d":"M9 18l0 3"}],["path",{"d":"M15 18l0 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6],"o":[12,12],"a":0.1}];

export const BrandAndroidIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAndroidIcon.displayName = "BrandAndroidIcon";
