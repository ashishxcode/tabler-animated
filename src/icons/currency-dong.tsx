"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 20h8"}],["path",{"d":"M15 13a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3a3 3 0 0 1 3 -3a3 3 0 0 1 3 3"}],["path",{"d":"M15 4v12"}],["path",{"d":"M13 6h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12.5,12],"a":0.14}];

export const CurrencyDongIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyDongIcon.displayName = "CurrencyDongIcon";
