"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 6a1 1 0 1 0 2 0a1 1 0 1 0 -2 0","fill":"currentColor"}],["path",{"d":"M11 18a1 1 0 1 0 2 0a1 1 0 1 0 -2 0","fill":"currentColor"}],["path",{"d":"M5 12l14 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,6],[12,18]]}];

export const DivideIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DivideIcon.displayName = "DivideIcon";
