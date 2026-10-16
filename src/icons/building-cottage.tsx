"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l18 0"}],["path",{"d":"M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11"}],["path",{"d":"M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12,21],"d":[0,-1.8]}];

export const BuildingCottageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingCottageIcon.displayName = "BuildingCottageIcon";
