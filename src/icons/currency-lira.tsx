"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5v15a7 7 0 0 0 7 -7"}],["path",{"d":"M6 15l8 -4"}],["path",{"d":"M14 7l-8 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[11.5,12.5],"a":0.14}];

export const CurrencyLiraIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyLiraIcon.displayName = "CurrencyLiraIcon";
