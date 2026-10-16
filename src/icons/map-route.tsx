"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13"}],["path",{"d":"M9 12v.01"}],["path",{"d":"M6 13v.01"}],["path",{"d":"M17 15l-4 -4"}],["path",{"d":"M13 15l4 -4"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4],"o":[12,20],"d":[0,-2.2]}];

export const MapRouteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapRouteIcon.displayName = "MapRouteIcon";
