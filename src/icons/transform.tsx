"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"}],["path",{"d":"M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"}],["path",{"d":"M15 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,6],[18,18]]}];

export const TransformIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TransformIcon.displayName = "TransformIcon";
