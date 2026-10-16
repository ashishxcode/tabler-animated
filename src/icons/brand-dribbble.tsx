"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M9 3.6c5 6 7 10.5 7.5 16.2"}],["path",{"d":"M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"}],["path",{"d":"M3.1 10.75c5 0 9.814 -.38 15.314 -5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.1}];

export const BrandDribbbleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandDribbbleIcon.displayName = "BrandDribbbleIcon";
