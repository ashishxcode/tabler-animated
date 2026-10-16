"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M13.414 20.9a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.337 -3.413"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1],"o":[12,21.49],"d":[0,-2.2]}];

export const MapPinPauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapPinPauseIcon.displayName = "MapPinPauseIcon";
