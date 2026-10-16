"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"}],["path",{"d":"M4 13c.468 3.6 3.384 6.546 7 7"}],["path",{"d":"M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"}],["path",{"d":"M15 21v-6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,7.51],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[7.5,16.5],[19.5,18],[15,18]]}];

export const Hours12Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Hours12Icon.displayName = "Hours12Icon";
