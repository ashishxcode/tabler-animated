"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M13.004 21.216a2 2 0 0 1 -2.417 -.316l-4.244 -4.243a8 8 0 0 1 11.314 -11.314a7.93 7.93 0 0 1 2.343 5.657"}],["path",{"d":"M17 19a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-2"}],["path",{"d":"M18 18v-1.5a1.5 1.5 0 1 1 3 0v1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[19.5,18.5],"a":0.35,"dl":0.2}];

export const MapLockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapLockIcon.displayName = "MapLockIcon";
