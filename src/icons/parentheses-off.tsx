"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.743 5.745a12.253 12.253 0 0 0 1.257 14.255"}],["path",{"d":"M17 4a12.25 12.25 0 0 1 2.474 11.467m-1.22 2.794a12.291 12.291 0 0 1 -1.254 1.739"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"nudge","n":[0],"o":[5.51,12.87],"d":[-1.8,0]},{"fx":"nudge","n":[1],"o":[18.49,12],"d":[1.8,0]}];

export const ParenthesesOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ParenthesesOffIcon.displayName = "ParenthesesOffIcon";
