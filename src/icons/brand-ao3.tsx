"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 5c7.109 4.1 10.956 10.131 12 14c1.074 -4.67 4.49 -8.94 8 -11"}],["path",{"d":"M12 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 9c-.278 5.494 -2.337 7.33 -4 10c4.013 -2 6.02 -5 15.05 -5c4.012 0 3.51 2.5 1 3c2 .5 2.508 5 -2.007 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12.51],"a":0.1}];

export const BrandAo3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAo3Icon.displayName = "BrandAo3Icon";
