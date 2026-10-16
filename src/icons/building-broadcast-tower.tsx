"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M16.616 13.924a5 5 0 1 0 -9.23 0"}],["path",{"d":"M20.307 15.469a9 9 0 1 0 -16.615 0"}],["path",{"d":"M9 21l3 -9l3 9"}],["path",{"d":"M10 19h4"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,4,3,1],"st":0.13,"os":[[12,12],[12,19],[12,16.5],[12,10.46]]}];

export const BuildingBroadcastTowerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingBroadcastTowerIcon.displayName = "BuildingBroadcastTowerIcon";
