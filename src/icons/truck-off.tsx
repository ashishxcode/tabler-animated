"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15.585 15.586a2 2 0 0 0 2.826 2.831"}],["path",{"d":"M5 17h-2v-11a1 1 0 0 1 1 -1h1m3.96 0h4.04v4m0 4v4m-4 0h6m6 0v-6h-6m-2 -5h5l3 5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[16.7,17.29],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,2],"o":[12,12],"d":[2.4,0]}];

export const TruckOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TruckOffIcon.displayName = "TruckOffIcon";
