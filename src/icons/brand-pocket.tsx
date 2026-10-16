"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 4h14a2 2 0 0 1 2 2v6a9 9 0 0 1 -18 0v-6a2 2 0 0 1 2 -2"}],["path",{"d":"M8 11l4 4l4 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.5],"a":0.1}];

export const BrandPocketIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandPocketIcon.displayName = "BrandPocketIcon";
