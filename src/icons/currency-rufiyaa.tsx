"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 16h.01"}],["path",{"d":"M4 16c9.5 -4 11.5 -8 14 -9"}],["path",{"d":"M12 8l5 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12.01,11.5],"a":0.14}];

export const CurrencyRufiyaaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyRufiyaaIcon.displayName = "CurrencyRufiyaaIcon";
