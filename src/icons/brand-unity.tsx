"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3l6 4v7"}],["path",{"d":"M18 17l-6 4l-6 -4"}],["path",{"d":"M4 14v-7l6 -4"}],["path",{"d":"M4 7l8 5v9"}],["path",{"d":"M20 7l-8 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.1}];

export const BrandUnityIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandUnityIcon.displayName = "BrandUnityIcon";
