"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 8.04v-5.04"}],["path",{"d":"M15.5 10l4.5 -2.5"}],["path",{"d":"M15.5 14l4.5 2.5"}],["path",{"d":"M12 15.96v5.04"}],["path",{"d":"M8.5 14l-4.5 2.5"}],["path",{"d":"M8.5 10l-4.5 -2.505"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12,12],"a":0.1}];

export const BrandWalmartIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandWalmartIcon.displayName = "BrandWalmartIcon";
