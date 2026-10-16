"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 18l2 -13l2 -2l2 2l2 13"}],["path",{"d":"M5 21v-3h14v3"}],["path",{"d":"M3 21l18 0"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,21],"d":[0,-1.8]}];

export const BuildingMonumentIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingMonumentIcon.displayName = "BuildingMonumentIcon";
