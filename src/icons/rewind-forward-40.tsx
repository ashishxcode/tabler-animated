"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.007 16.478a6 6 0 0 1 3.993 -10.478h11"}],["path",{"d":"M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0"}],["path",{"d":"M17 9l3 -3l-3 -3"}],["path",{"d":"M9 14v2a1 1 0 0 0 1 1h1"}],["path",{"d":"M12 14v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.5,11.24],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.5,17],[18.5,6],[10,15.5],[12,17]]}];

export const RewindForward40Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RewindForward40Icon.displayName = "RewindForward40Icon";
