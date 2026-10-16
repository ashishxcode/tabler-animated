"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4"}],["path",{"d":"M4 18v-12h3a3 3 0 1 1 0 6h-3c5.5 0 5 4 6 6"}],["path",{"d":"M18 6v-2"}],["path",{"d":"M17 20v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12.5,12],"a":0.14}];

export const CurrencyRealIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyRealIcon.displayName = "CurrencyRealIcon";
