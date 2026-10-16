"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18h-7l7 -7h-7"}],["path",{"d":"M17 18v-13"}],["path",{"d":"M14 14.5l6 -3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12.5,11.5],"a":0.14}];

export const CurrencyZlotyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyZlotyIcon.displayName = "CurrencyZlotyIcon";
