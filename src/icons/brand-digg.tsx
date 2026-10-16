"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 15h-3v-4h3"}],["path",{"d":"M15 15h-3v-4h3"}],["path",{"d":"M9 15v-4"}],["path",{"d":"M15 11v7h-3"}],["path",{"d":"M6 7v8"}],["path",{"d":"M21 15h-3v-4h3"}],["path",{"d":"M21 11v7h-3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6],"o":[12,12.5],"a":0.1}];

export const BrandDiggIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandDiggIcon.displayName = "BrandDiggIcon";
