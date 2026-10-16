"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 21h1a1 1 0 0 0 1 -1v-1a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2"}],["path",{"d":"M7 7v.01"}],["path",{"d":"M7 10v.01"}],["path",{"d":"M7 13v.01"}],["path",{"d":"M17 7v.01"}],["path",{"d":"M17 10v.01"}],["path",{"d":"M17 13v.01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6],"o":[12,21],"d":[0,-1.8]}];

export const BuildingFortressIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingFortressIcon.displayName = "BuildingFortressIcon";
