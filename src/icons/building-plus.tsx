"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21h9"}],["path",{"d":"M9 8h1"}],["path",{"d":"M9 12h1"}],["path",{"d":"M9 16h1"}],["path",{"d":"M14 8h1"}],["path",{"d":"M14 12h1"}],["path",{"d":"M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[7,8],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"hop","n":[0,1,2,3,4,5,6],"o":[11,21],"d":[0,-1.8]}];

export const BuildingPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingPlusIcon.displayName = "BuildingPlusIcon";
