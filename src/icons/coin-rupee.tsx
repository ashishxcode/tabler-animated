"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M15 8h-6h1a3 3 0 0 1 0 6h-1l3 3"}],["path",{"d":"M9 11h6"}]];
const rig: Rig[] = [{"fx":"flip","n":[0,1,2],"o":[12,12]}];

export const CoinRupeeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CoinRupeeIcon.displayName = "CoinRupeeIcon";
