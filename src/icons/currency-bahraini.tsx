"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3"}],["path",{"d":"M7 19.01v-.01"}],["path",{"d":"M14 15.01v-.01"}],["path",{"d":"M17 15h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,13.51],"a":0.14}];

export const CurrencyBahrainiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyBahrainiIcon.displayName = "CurrencyBahrainiIcon";
