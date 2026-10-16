"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M9 13h6"}],["path",{"d":"M9 8l3 4.5"}],["path",{"d":"M15 8l-3 4.5v4.5"}]];
const rig: Rig[] = [{"fx":"flip","n":[0,1,2,3],"o":[12,12]}];

export const CoinYuanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CoinYuanIcon.displayName = "CoinYuanIcon";
