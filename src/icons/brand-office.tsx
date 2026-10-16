"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18h9v-12l-5 2v5l-4 2v-8l9 -4l7 2v13l-7 3l-9 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.1}];

export const BrandOfficeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandOfficeIcon.displayName = "BrandOfficeIcon";
