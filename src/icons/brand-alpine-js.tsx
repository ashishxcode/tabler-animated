"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 11.5l4.5 4.5h9l-9 -9l-4.5 4.5"}],["path",{"d":"M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,11.5],"a":0.1}];

export const BrandAlpineJsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAlpineJsIcon.displayName = "BrandAlpineJsIcon";
