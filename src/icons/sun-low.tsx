"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M4 12h.01"}],["path",{"d":"M12 4v.01"}],["path",{"d":"M20 12h.01"}],["path",{"d":"M12 20v.01"}],["path",{"d":"M6.31 6.31l-.01 -.01"}],["path",{"d":"M17.71 6.31l-.01 -.01"}],["path",{"d":"M17.7 17.7l.01 .01"}],["path",{"d":"M6.3 17.7l.01 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.1},{"fx":"spin","n":[1,2,3,4,5,6,7,8],"o":[12.01,12.01],"a":45,"sym":true}];

export const SunLowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SunLowIcon.displayName = "SunLowIcon";
