"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 21l-4 -7l6.5 -11"}],["path",{"d":"M7 7l2 3.5l-3 4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.25,12],"a":0.1}];

export const BrandXingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandXingIcon.displayName = "BrandXingIcon";
