"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M17 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3"}],["path",{"d":"M16.5 8.5l2.5 2.5l2.5 -2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,8],"a":0.06},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,17],[12,17],[19,17],[19,9.75]]}];

export const ReorderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReorderIcon.displayName = "ReorderIcon";
