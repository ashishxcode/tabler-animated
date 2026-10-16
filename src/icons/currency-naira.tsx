"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 18v-10.948a1.05 1.05 0 0 1 1.968 -.51l6.064 10.916a1.05 1.05 0 0 0 1.968 -.51v-10.948"}],["path",{"d":"M5 10h14"}],["path",{"d":"M5 14h14"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.14}];

export const CurrencyNairaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyNairaIcon.displayName = "CurrencyNairaIcon";
