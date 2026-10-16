"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12"}],["path",{"d":"M12.5 13h4.5c.025 2.612 .894 5.296 2 8"}],["path",{"d":"M9 5a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1"}],["path",{"d":"M3 21l19 0"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12.5,21],"d":[0,-1.8]}];

export const BuildingFactoryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingFactoryIcon.displayName = "BuildingFactoryIcon";
