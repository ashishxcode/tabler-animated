"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"}],["path",{"d":"M13 7l0 .01"}],["path",{"d":"M17 7l0 .01"}],["path",{"d":"M17 11l0 .01"}],["path",{"d":"M17 15l0 .01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4],"o":[12,21],"d":[0,-1.8]}];

export const BuildingCommunityIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingCommunityIcon.displayName = "BuildingCommunityIcon";
