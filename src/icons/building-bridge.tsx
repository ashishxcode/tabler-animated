"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 5l0 14"}],["path",{"d":"M18 5l0 14"}],["path",{"d":"M2 15l20 0"}],["path",{"d":"M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2"}],["path",{"d":"M12 10l0 5"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4],"o":[12,19],"d":[0,-1.8]}];

export const BuildingBridgeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingBridgeIcon.displayName = "BuildingBridgeIcon";
