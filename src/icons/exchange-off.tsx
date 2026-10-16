"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19 8v5c0 .594 -.104 1.164 -.294 1.692m-1.692 2.298a4.978 4.978 0 0 1 -3.014 1.01h-3l3 -3"}],["path",{"d":"M14 21l-3 -3"}],["path",{"d":"M5 16v-5c0 -1.632 .782 -3.082 1.992 -4m3.008 -1h3l-3 -3"}],["path",{"d":"M11.501 7.499l1.499 -1.499"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[12.5,19.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,18],[19,6],[15,13],[9,9.5],[12.25,6.75]]}];

export const ExchangeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ExchangeOffIcon.displayName = "ExchangeOffIcon";
