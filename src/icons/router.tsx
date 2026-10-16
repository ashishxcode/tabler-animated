"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 15a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4"}],["path",{"d":"M17 17l0 .01"}],["path",{"d":"M13 17l0 .01"}],["path",{"d":"M15 13l0 -2"}],["path",{"d":"M11.75 8.75a4 4 0 0 1 6.5 0"}],["path",{"d":"M8.5 6.5a8 8 0 0 1 13 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,17],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,17.01],[13,17.01],[15,12],[15,7.92],[15,4.83]]}];

export const RouterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RouterIcon.displayName = "RouterIcon";
