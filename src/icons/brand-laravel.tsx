"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5l0 11.5"}],["path",{"d":"M11 18v4"}],["path",{"d":"M7 15.5l7 -4"}],["path",{"d":"M14 7.5v4"}],["path",{"d":"M14 11.5l4 2.5"}],["path",{"d":"M11 13v-7.5l-4 -2.5l-4 2.5"}],["path",{"d":"M7 8l4 -2.5"}],["path",{"d":"M18 10l4 -2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[12.5,12.5],"a":0.1}];

export const BrandLaravelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandLaravelIcon.displayName = "BrandLaravelIcon";
