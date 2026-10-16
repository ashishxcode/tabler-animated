"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"}],["path",{"d":"M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"}],["path",{"d":"M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[12.02,12],"d":[2.4,0],"st":0.1}];

export const WindIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WindIcon.displayName = "WindIcon";
