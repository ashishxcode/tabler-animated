"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5"}],["path",{"d":"M19.5 10.5l-7.5 -7.5l-9 9h2v7a2 2 0 0 0 2 2h6"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.387 0 .748 .11 1.054 .3"}],["path",{"d":"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[19,18],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1,2],"o":[12,22.5],"d":[0,-1.8]}];

export const HomeBitcoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeBitcoinIcon.displayName = "HomeBitcoinIcon";
