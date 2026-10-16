"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l18 0"}],["path",{"d":"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"}],["path",{"d":"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"}],["path",{"d":"M10 9l4 0"}],["path",{"d":"M12 7l0 4"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4],"o":[12,21],"d":[0,-1.8]}];

export const BuildingHospitalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingHospitalIcon.displayName = "BuildingHospitalIcon";
