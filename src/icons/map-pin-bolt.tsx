"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M13.414 20.9a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.591 -4.629"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1],"o":[12,12.24]}];

export const MapPinBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapPinBoltIcon.displayName = "MapPinBoltIcon";
