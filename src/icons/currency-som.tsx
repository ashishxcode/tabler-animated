"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 18v-12h-5v10a2 2 0 0 1 -2 2"}],["path",{"d":"M14 6v12h4a3 3 0 0 0 0 -6h-4h4a3 3 0 0 0 0 -6h-4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.14}];

export const CurrencySomIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencySomIcon.displayName = "CurrencySomIcon";
