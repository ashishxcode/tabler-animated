"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4"}],["path",{"d":"M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"}],["path",{"d":"M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"}],["path",{"d":"M12 15l0 -6"}]];
const rig: Rig[] = [{"fx":"sway","n":[0,1,2,3],"o":[12,21],"a":5}];

export const PlantIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlantIcon.displayName = "PlantIcon";
