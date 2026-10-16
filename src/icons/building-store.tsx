"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l18 0"}],["path",{"d":"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"}],["path",{"d":"M5 21l0 -10.15"}],["path",{"d":"M19 21l0 -10.15"}],["path",{"d":"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4],"o":[12,21],"d":[0,-1.8]}];

export const BuildingStoreIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingStoreIcon.displayName = "BuildingStoreIcon";
