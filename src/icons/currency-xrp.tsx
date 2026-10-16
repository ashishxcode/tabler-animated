"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 5l3.585 3.585a4.83 4.83 0 0 0 6.83 0l3.585 -3.585"}],["path",{"d":"M5 19l3.585 -3.585a4.83 4.83 0 0 1 6.83 0l3.585 3.584"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.14}];

export const CurrencyXrpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyXrpIcon.displayName = "CurrencyXrpIcon";
