"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17.2 7a6 7 0 1 0 0 10"}],["path",{"d":"M13 10h-8m0 4h8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[11.1,12],"a":0.14}];

export const CurrencyEuroIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyEuroIcon.displayName = "CurrencyEuroIcon";
