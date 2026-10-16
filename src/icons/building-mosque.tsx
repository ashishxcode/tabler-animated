"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21h7v-2a2 2 0 1 1 4 0v2h7"}],["path",{"d":"M4 21v-10"}],["path",{"d":"M20 21v-10"}],["path",{"d":"M4 16h3v-3h10v3h3"}],["path",{"d":"M17 13a5 5 0 0 0 -10 0"}],["path",{"d":"M21 10.5c0 -.329 -.077 -.653 -.224 -.947l-.776 -1.553l-.776 1.553a2.118 2.118 0 0 0 -.224 .947a.5 .5 0 0 0 .5 .5h1a.5 .5 0 0 0 .5 -.5"}],["path",{"d":"M5 10.5c0 -.329 -.077 -.653 -.224 -.947l-.776 -1.553l-.776 1.553a2.118 2.118 0 0 0 -.224 .947a.5 .5 0 0 0 .5 .5h1a.5 .5 0 0 0 .5 -.5"}],["path",{"d":"M12 2a2 2 0 1 0 2 2"}],["path",{"d":"M12 6v2"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7,8],"o":[12,21],"d":[0,-1.8]}];

export const BuildingMosqueIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingMosqueIcon.displayName = "BuildingMosqueIcon";
