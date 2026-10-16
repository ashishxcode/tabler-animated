"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 9v2a2 2 0 1 1 -4 0v-1v1a2 2 0 1 1 -4 0v-1v4a2 2 0 1 1 -4 0v-2"}],["path",{"d":"M18 12.01v-.01"}],["path",{"d":"M22 10v1a5 5 0 0 1 -5 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12.5,12.5],"a":0.14}];

export const CurrencyRiyalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyRiyalIcon.displayName = "CurrencyRiyalIcon";
