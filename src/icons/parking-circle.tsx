"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 16v-8h3.334c.92 0 1.666 .895 1.666 2s-.746 2 -1.666 2h-3.334"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.08},{"fx":"pop","n":[0],"o":[12.5,12],"a":0.22,"dl":0.1}];

export const ParkingCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ParkingCircleIcon.displayName = "ParkingCircleIcon";
