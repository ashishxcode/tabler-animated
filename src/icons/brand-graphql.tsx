"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8l8 -5l8 5v8l-8 5l-8 -5l0 -8"}],["path",{"d":"M12 4l7.5 12h-15l7.5 -12"}],["path",{"d":"M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M11 21a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M3 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M3 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M19 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M19 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[12,12],"a":0.1}];

export const BrandGraphqlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandGraphqlIcon.displayName = "BrandGraphqlIcon";
