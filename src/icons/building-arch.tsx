"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l18 0"}],["path",{"d":"M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15"}],["path",{"d":"M9 21v-8a3 3 0 0 1 6 0v8"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,21],"d":[0,-1.8]}];

export const BuildingArchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingArchIcon.displayName = "BuildingArchIcon";
