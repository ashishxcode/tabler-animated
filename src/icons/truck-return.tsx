"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2"}],["path",{"d":"M9 17l6 0"}],["path",{"d":"M13 6h5l3 5v6h-2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[12,12],"d":[2.4,0]}];

export const TruckReturnIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TruckReturnIcon.displayName = "TruckReturnIcon";
