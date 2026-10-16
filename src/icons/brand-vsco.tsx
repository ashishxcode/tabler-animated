"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0"}],["path",{"d":"M17 12a5 5 0 1 0 -10 0a5 5 0 0 0 10 0"}],["path",{"d":"M12 3v4"}],["path",{"d":"M21 12h-4"}],["path",{"d":"M12 21v-4"}],["path",{"d":"M3 12h4"}],["path",{"d":"M18.364 5.636l-2.828 2.828"}],["path",{"d":"M18.364 18.364l-2.828 -2.828"}],["path",{"d":"M5.636 18.364l2.828 -2.828"}],["path",{"d":"M5.636 5.636l2.828 2.828"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9],"o":[12,12],"a":0.1}];

export const BrandVscoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandVscoIcon.displayName = "BrandVscoIcon";
