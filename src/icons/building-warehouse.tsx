"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21v-13l9 -4l9 4v13"}],["path",{"d":"M13 13h4v8h-10v-6h6"}],["path",{"d":"M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,21],"d":[0,-1.8]}];

export const BuildingWarehouseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BuildingWarehouseIcon.displayName = "BuildingWarehouseIcon";
