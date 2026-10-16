"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20l2.25 -2.25"}],["path",{"d":"M20 20l-2.25 -2.25"}],["path",{"d":"M20 4l-2.25 2.25"}],["path",{"d":"M4 4l2.25 2.25"}],["path",{"d":"M10 19.748a8.01 8.01 0 0 1 -5.747 -5.748"}],["path",{"d":"M19.748 14a8.01 8.01 0 0 1 -5.748 5.748"}],["path",{"d":"M4.252 10a8.02 8.02 0 0 1 5.478 -5.672l.27 -.075"}],["path",{"d":"M14 4.252a8.01 8.01 0 0 1 5.748 5.749"}],["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5,6,7],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[5.13,18.88],[18.88,18.88],[18.88,5.13],[5.13,5.13],[12,12]]}];

export const MiddlewareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MiddlewareIcon.displayName = "MiddlewareIcon";
