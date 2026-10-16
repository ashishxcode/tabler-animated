"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 20v-2"}],["path",{"d":"M15 8.01v.01"}],["path",{"d":"M3 17l8 -8v-1a4 4 0 1 1 8 0h2l-2 2v1a7 7 0 0 1 -13.215 3.223"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,11],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,19],[15,8.02]]}];

export const CanaryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CanaryIcon.displayName = "CanaryIcon";
