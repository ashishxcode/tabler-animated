"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M5 18h-1a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2h12a4 4 0 0 1 4 4h-18"}],["path",{"d":"M9 18h6"}],["path",{"d":"M19 18h1a1 1 0 0 0 1 -1v-4l-3 -5"}],["path",{"d":"M21 13h-7"}],["path",{"d":"M14 8v10"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,11],"a":0.06},{"fx":"pop","n":[0,1,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,18],[17,18],[12,18],[19.5,13],[17.5,13],[14,13]]}];

export const CamperIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CamperIcon.displayName = "CamperIcon";
