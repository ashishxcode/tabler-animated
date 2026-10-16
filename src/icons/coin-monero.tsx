"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M4 16h4v-7l4 4l4 -4v7h4"}]];
const rig: Rig[] = [{"fx":"flip","n":[0,1],"o":[12,12]}];

export const CoinMoneroIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CoinMoneroIcon.displayName = "CoinMoneroIcon";
