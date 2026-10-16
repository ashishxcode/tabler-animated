"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M9 9l1 6l2 -3.75l2 3.75l1 -6"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1],"o":[12,21],"d":[0,-2.2]}];

export const MapWestIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapWestIcon.displayName = "MapWestIcon";
