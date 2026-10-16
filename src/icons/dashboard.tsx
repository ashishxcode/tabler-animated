"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M13.45 11.55l2.05 -2.05"}],["path",{"d":"M6.4 20a9 9 0 1 1 11.2 0l-11.2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,11.98],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,13],[14.48,10.53]]}];

export const DashboardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DashboardIcon.displayName = "DashboardIcon";
