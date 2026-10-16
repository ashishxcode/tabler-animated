"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1"}],["path",{"d":"M8 16h8"}],["path",{"d":"M8.322 12.582l7.956 .836"}],["path",{"d":"M8.787 9.168l7.826 1.664"}],["path",{"d":"M10.096 5.764l7.608 2.472"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12.88],"a":0.1}];

export const BrandStackoverflowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandStackoverflowIcon.displayName = "BrandStackoverflowIcon";
