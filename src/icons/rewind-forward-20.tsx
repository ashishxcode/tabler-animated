"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.007 16.478a6 6 0 0 1 3.993 -10.478h11"}],["path",{"d":"M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0"}],["path",{"d":"M17 9l3 -3l-3 -3"}],["path",{"d":"M9 14h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.5,11.24],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.5,17],[18.5,6],[10.5,17]]}];

export const RewindForward20Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RewindForward20Icon.displayName = "RewindForward20Icon";
