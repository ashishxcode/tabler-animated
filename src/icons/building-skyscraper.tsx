"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l18 0"}],["path",{"d":"M5 21v-14l8 -4v18"}],["path",{"d":"M19 21v-10l-6 -4"}],["path",{"d":"M9 9l0 .01"}],["path",{"d":"M9 12l0 .01"}],["path",{"d":"M9 15l0 .01"}],["path",{"d":"M9 18l0 .01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6],"o":[12,21],"d":[0,-1.8]}];

export const BuildingSkyscraperIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingSkyscraperIcon.displayName = "BuildingSkyscraperIcon";
