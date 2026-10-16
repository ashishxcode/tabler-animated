"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 17a4 4 0 1 0 8 0"}],["path",{"d":"M3 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M7 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M7 7c0 3 2 5 2 9"}],["path",{"d":"M15 7c0 4 -2 6 -2 10"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.06}];

export const ZodiacLeoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZodiacLeoIcon.displayName = "ZodiacLeoIcon";
