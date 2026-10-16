"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 13a6 6 0 1 0 -6 6"}],["path",{"d":"M6 19h12"}],["path",{"d":"M10 5v7"}],["path",{"d":"M14 12v-7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.14}];

export const CurrencyLariIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyLariIcon.displayName = "CurrencyLariIcon";
