"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 20v-5"}],["path",{"d":"M17 9v-5"}],["path",{"d":"M17 20v-6a2 2 0 0 0 -2 -2h-6a2 2 0 0 1 -2 -2v-6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.14}];

export const CurrencyHusdIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyHusdIcon.displayName = "CurrencyHusdIcon";
