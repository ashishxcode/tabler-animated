"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l18 0"}],["path",{"d":"M9 8l1 0"}],["path",{"d":"M9 12l1 0"}],["path",{"d":"M9 16l1 0"}],["path",{"d":"M14 8l1 0"}],["path",{"d":"M14 12l1 0"}],["path",{"d":"M14 16l1 0"}],["path",{"d":"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7],"o":[12,21],"d":[0,-1.8]}];

export const BuildingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingIcon.displayName = "BuildingIcon";
