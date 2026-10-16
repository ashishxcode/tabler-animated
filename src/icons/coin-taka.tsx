"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 8l.553 -.276a1 1 0 0 1 1.447 .894v6.382a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5 -2.5v-.5h-1"}],["path",{"d":"M8 11h7"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}]];
const rig: Rig[] = [{"fx":"flip","n":[0,1,2],"o":[12,12]}];

export const CoinTakaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CoinTakaIcon.displayName = "CoinTakaIcon";
