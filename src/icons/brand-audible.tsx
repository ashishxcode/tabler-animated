"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.46 9.75a9 9 0 0 0 -12.92 0"}],["path",{"d":"M14.34 11.58a5 5 0 0 0 -4.68 0"}],["path",{"d":"M22 13l-10 4l-10 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12.01],"a":0.1}];

export const BrandAudibleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAudibleIcon.displayName = "BrandAudibleIcon";
