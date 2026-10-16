"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"}],["path",{"d":"M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"}],["path",{"d":"M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"}],["path",{"d":"M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"}],["path",{"d":"M6.5 16a3.5 3.5 0 0 1 0 -7h.5"}],["path",{"d":"M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[8.5,9.75],"a":0.06},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.5,17],[8.5,17],[19,12.5],[15.5,6.15],[5,12.5]]}];

export const BrainIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrainIcon.displayName = "BrainIcon";
