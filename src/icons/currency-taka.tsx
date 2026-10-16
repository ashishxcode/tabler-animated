"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5"}],["path",{"d":"M8 11h6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12.25,12],"a":0.14}];

export const CurrencyTakaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyTakaIcon.displayName = "CurrencyTakaIcon";
