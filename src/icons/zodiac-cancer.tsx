"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M15 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M3 12a10 6.5 0 0 1 14 -6.5"}],["path",{"d":"M21 12a10 6.5 0 0 1 -14 6.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,12],[18,12]]}];

export const ZodiacCancerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZodiacCancerIcon.displayName = "ZodiacCancerIcon";
