"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6l3.245 11.358a.85 .85 0 0 0 1.624 .035l3.131 -9.393l3.131 9.393a.85 .85 0 0 0 1.624 -.035l3.245 -11.358"}],["path",{"d":"M21 10h-18"}],["path",{"d":"M21 14h-18"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,11.99],"a":0.14}];

export const CurrencyWonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyWonIcon.displayName = "CurrencyWonIcon";
