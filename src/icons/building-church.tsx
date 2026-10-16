"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l18 0"}],["path",{"d":"M10 21v-4a2 2 0 0 1 4 0v4"}],["path",{"d":"M10 5l4 0"}],["path",{"d":"M12 3l0 5"}],["path",{"d":"M6 21v-7m-2 2l8 -8l8 8m-2 -2v7"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4],"o":[12,21],"d":[0,-1.8]}];

export const BuildingChurchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingChurchIcon.displayName = "BuildingChurchIcon";
