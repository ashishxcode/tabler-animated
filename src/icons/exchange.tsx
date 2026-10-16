"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3"}],["path",{"d":"M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,18],[19,6]]}];

export const ExchangeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ExchangeIcon.displayName = "ExchangeIcon";
