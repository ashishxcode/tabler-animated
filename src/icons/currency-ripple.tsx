"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M10 12h3l2 -2.5"}],["path",{"d":"M15 14.5l-2 -2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.14}];

export const CurrencyRippleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyRippleIcon.displayName = "CurrencyRippleIcon";
