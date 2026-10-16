"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21h9"}],["path",{"d":"M9 8h1"}],["path",{"d":"M9 12h1"}],["path",{"d":"M9 16h1"}],["path",{"d":"M14 8h1"}],["path",{"d":"M14 12h1"}],["path",{"d":"M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7"}],["path",{"d":"M16 18c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414"}],["path",{"d":"M18 14.5v1.5"}],["path",{"d":"M18 20v1.5"}],["path",{"d":"M21.032 16.25l-1.299 .75"}],["path",{"d":"M16.27 19l-1.3 .75"}],["path",{"d":"M14.97 16.25l1.3 .75"}],["path",{"d":"M19.733 19l1.3 .75"}]];
const rig: Rig[] = [{"fx":"pop","n":[7,8,9,10,11,12,13],"o":[18,18],"a":0.35,"dl":0.2},{"fx":"spin","n":[0,1,2,3,4,5,6],"o":[11,12],"a":360}];

export const BuildingCogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingCogIcon.displayName = "BuildingCogIcon";
