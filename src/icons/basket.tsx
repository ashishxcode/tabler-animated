"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304"}],["path",{"d":"M17 10l-2 -6"}],["path",{"d":"M7 10l2 -6"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3],"o":[12,5],"a":-8}];

export const BasketIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BasketIcon.displayName = "BasketIcon";
