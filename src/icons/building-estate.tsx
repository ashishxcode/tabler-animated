"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21h18"}],["path",{"d":"M19 21v-4"}],["path",{"d":"M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2"}],["path",{"d":"M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14"}],["path",{"d":"M9 17v4"}],["path",{"d":"M8 13h2"}],["path",{"d":"M8 9h2"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6],"o":[12,21],"d":[0,-1.8]}];

export const BuildingEstateIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingEstateIcon.displayName = "BuildingEstateIcon";
