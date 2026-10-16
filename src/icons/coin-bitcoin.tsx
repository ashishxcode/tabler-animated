"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M9 8h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09"}],["path",{"d":"M10 12h4"}],["path",{"d":"M10 7v10v-9"}],["path",{"d":"M13 7v1"}],["path",{"d":"M13 16v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[13,16.5],"a":0.35,"dl":0.2},{"fx":"flip","n":[0,1,2,3,4],"o":[12,12]}];

export const CoinBitcoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CoinBitcoinIcon.displayName = "CoinBitcoinIcon";
