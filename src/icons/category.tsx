"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 4h6v6h-6l0 -6"}],["path",{"d":"M14 4h6v6h-6l0 -6"}],["path",{"d":"M4 14h6v6h-6l0 -6"}],["path",{"d":"M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.12}];

export const CategoryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CategoryIcon.displayName = "CategoryIcon";
