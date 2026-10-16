"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 4h-4a3 3 0 0 0 -3 3v12"}],["path",{"d":"M10 11h-6"}],["path",{"d":"M16 4v13a2 2 0 0 0 2 2h2"}],["path",{"d":"M19 9h-5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,11.5],"a":0.14}];

export const CurrencyForintIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyForintIcon.displayName = "CurrencyForintIcon";
