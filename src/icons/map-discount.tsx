"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v8.5"}],["path",{"d":"M9 4v13"}],["path",{"d":"M15 7v5.5"}],["path",{"d":"M16 21l5 -5"}],["path",{"d":"M21 21v.01"}],["path",{"d":"M16 16v.01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5],"o":[12,21.01],"d":[0,-2.2]}];

export const MapDiscountIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapDiscountIcon.displayName = "MapDiscountIcon";
