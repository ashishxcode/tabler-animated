"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3l2 3l2 15h-8l2 -15l2 -3"}],["path",{"d":"M8 9l8 0"}],["path",{"d":"M3 11l2 -2l-2 -2"}],["path",{"d":"M21 11l-2 -2l2 -2"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12,21],"d":[0,-1.8]}];

export const BuildingLighthouseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingLighthouseIcon.displayName = "BuildingLighthouseIcon";
