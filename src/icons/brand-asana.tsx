"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M4 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,11.5],"a":0.1}];

export const BrandAsanaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAsanaIcon.displayName = "BrandAsanaIcon";
