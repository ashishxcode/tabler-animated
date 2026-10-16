"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"}],["path",{"d":"M10 12l-2 -2.2l.6 -1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.36],"a":0.12}];

export const DiamondIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DiamondIcon.displayName = "DiamondIcon";
