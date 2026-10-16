"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 6v12"}],["path",{"d":"M5 12c3.5 0 6 -3 6 -6"}],["path",{"d":"M5 12c3.5 0 6 3 6 6"}],["path",{"d":"M15 10v8"}],["path",{"d":"M19 10a4 4 0 0 0 -4 4"}],["path",{"d":"M20 18.01v-.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12.5,12.01],"a":0.14}];

export const CurrencyKroneDanishIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyKroneDanishIcon.displayName = "CurrencyKroneDanishIcon";
