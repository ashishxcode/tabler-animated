"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6"}],["path",{"d":"M7 9l11 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.5,12],"a":0.14}];

export const CurrencyRupeeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyRupeeIcon.displayName = "CurrencyRupeeIcon";
