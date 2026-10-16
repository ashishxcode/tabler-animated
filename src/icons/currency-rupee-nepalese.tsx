"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6"}],["path",{"d":"M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.5,12],"a":0.14}];

export const CurrencyRupeeNepaleseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyRupeeNepaleseIcon.displayName = "CurrencyRupeeNepaleseIcon";
