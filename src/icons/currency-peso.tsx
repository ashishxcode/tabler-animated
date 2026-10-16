"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5"}],["path",{"d":"M18 8h-12"}],["path",{"d":"M18 11h-12"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.14}];

export const CurrencyPesoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyPesoIcon.displayName = "CurrencyPesoIcon";
