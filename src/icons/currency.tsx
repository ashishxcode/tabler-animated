"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M4 4l3 3"}],["path",{"d":"M20 4l-3 3"}],["path",{"d":"M4 20l3 -3"}],["path",{"d":"M20 20l-3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.14}];

export const CurrencyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyIcon.displayName = "CurrencyIcon";
