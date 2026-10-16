"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"}],["path",{"d":"M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055"}],["path",{"d":"M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[11.5,12],"d":[2.4,0]}];

export const GardenCartIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GardenCartIcon.displayName = "GardenCartIcon";
