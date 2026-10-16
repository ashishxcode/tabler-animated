"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21h18"}],["path",{"d":"M9 12h1"}],["path",{"d":"M9 16h1"}],["path",{"d":"M14 8h1"}],["path",{"d":"M14 16h1"}],["path",{"d":"M5 21v-16"}],["path",{"d":"M7 3h10c1 0 2 1 2 2v10"}],["path",{"d":"M19 19v2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[12,12],"dl":0.25},{"fx":"pop","n":[4,7],"o":[16.5,18.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1,2,3,5,6],"o":[12,21],"d":[0,-1.8]}];

export const BuildingOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingOffIcon.displayName = "BuildingOffIcon";
