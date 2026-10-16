"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"}],["path",{"d":"M8 13l3 -2l2 2l3 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.01,11.99],"a":0.1}];

export const BrandMessengerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandMessengerIcon.displayName = "BrandMessengerIcon";
