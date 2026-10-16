"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 8l2 2l4 -4l4 4l2 -2l-6 -6l-6 6"}],["path",{"d":"M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5l-6 -6"}],["path",{"d":"M20 10l2 2l-2 2l-2 -2l2 -2"}],["path",{"d":"M4 10l2 2l-2 2l-2 -2l2 -2"}],["path",{"d":"M12 10l2 2l-2 2l-2 -2l2 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.1}];

export const BrandBinanceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandBinanceIcon.displayName = "BrandBinanceIcon";
