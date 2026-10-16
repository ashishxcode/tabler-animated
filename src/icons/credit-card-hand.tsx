"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 4h9.914a3 3 0 0 1 1.92 .695l5.166 4.305"}],["path",{"d":"M11.15 9h8.85a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-13a2 2 0 0 1 -2 -2v-8.7"}],["path",{"d":"M3 8l7.2 4.7a1.803 1.803 0 0 0 2 -3l-4.2 -2.7"}],["path",{"d":"M5 16h17"}]];
const rig: Rig[] = [{"fx":"tap","n":[0,1,2,3],"o":[12,20]}];

export const CreditCardHandIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CreditCardHandIcon.displayName = "CreditCardHandIcon";
