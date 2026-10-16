"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 7.5l-4 9.5h4l6 -15l-6 5.5"}],["path",{"d":"M22 20l-7 -15l-3 7l4 5l-8 3l14 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,11],"a":0.1}];

export const BrandAzureIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAzureIcon.displayName = "BrandAzureIcon";
