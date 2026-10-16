"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527"}],["path",{"d":"M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055"}],["path",{"d":"M6 8h2m4 0h9l-3 6.01m-3.319 .693l-4.276 -.45a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"slide","n":[0,1,2],"o":[11.5,12],"d":[2.4,0]}];

export const GardenCartOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GardenCartOffIcon.displayName = "GardenCartOffIcon";
