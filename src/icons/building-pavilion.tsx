"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21h7v-3a2 2 0 0 1 4 0v3h7"}],["path",{"d":"M6 21l0 -9"}],["path",{"d":"M18 21l0 -9"}],["path",{"d":"M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12,21],"d":[0,-1.8]}];

export const BuildingPavilionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingPavilionIcon.displayName = "BuildingPavilionIcon";
