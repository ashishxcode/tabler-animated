"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21h18"}],["path",{"d":"M7 21v-18"}],["path",{"d":"M7 4c5.675 .908 10 5.613 10 11.28a11 11 0 0 1 -1.605 5.72"}],["path",{"d":"M5 9h12"}],["path",{"d":"M7 13h4"}],["path",{"d":"M7 17h4"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5],"o":[12,21],"d":[0,-1.8]}];

export const BuildingBurjAlArabIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingBurjAlArabIcon.displayName = "BuildingBurjAlArabIcon";
