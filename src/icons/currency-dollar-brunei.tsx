"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4"}],["path",{"d":"M17 20v-2"}],["path",{"d":"M18 6v-2"}],["path",{"d":"M3 6v12h4a3 3 0 0 0 0 -6h-4h4a3 3 0 0 0 0 -6h-4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[17,19],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,2,3],"o":[12,11],"a":0.14}];

export const CurrencyDollarBruneiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyDollarBruneiIcon.displayName = "CurrencyDollarBruneiIcon";
