"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4v14"}],["path",{"d":"M3 6h17a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-17"}],["path",{"d":"M9 13a2 2 0 1 0 0 -4a2 2 0 0 0 0 4"}],["path",{"d":"M15 9v4"}],["path",{"d":"M18 9v4"}],["path",{"d":"M7 16v3h8v-3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,11],"a":0.06},{"fx":"pop","n":[0,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[3,11],[9,11],[15,11],[18,11],[11,17.5]]}];

export const GpuIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GpuIcon.displayName = "GpuIcon";
