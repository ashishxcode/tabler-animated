"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717"}],["path",{"d":"M14 9l-9 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[11.5,12],"a":0.14}];

export const CurrencyLitecoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyLitecoinIcon.displayName = "CurrencyLitecoinIcon";
