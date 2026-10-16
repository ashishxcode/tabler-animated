"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4"}],["path",{"d":"M10 6h-4a3 3 0 1 0 0 6h1a3 3 0 0 1 0 6h-4"}],["path",{"d":"M17 20v-2"}],["path",{"d":"M18 6v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[17,19],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,3],"o":[12,11],"a":0.14}];

export const CurrencyDollarSingaporeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyDollarSingaporeIcon.displayName = "CurrencyDollarSingaporeIcon";
