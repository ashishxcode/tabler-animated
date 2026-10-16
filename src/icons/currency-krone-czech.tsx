"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 6v12"}],["path",{"d":"M5 12c3.5 0 6 -3 6 -6"}],["path",{"d":"M5 12c3.5 0 6 3 6 6"}],["path",{"d":"M19 6l-2 2l-2 -2"}],["path",{"d":"M19 12h-2a3 3 0 0 0 0 6h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.14}];

export const CurrencyKroneCzechIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyKroneCzechIcon.displayName = "CurrencyKroneCzechIcon";
