"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 12h1"}],["path",{"d":"M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"}],["path",{"d":"M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1"}],["path",{"d":"M9 12h6"}],["path",{"d":"M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1"}],["path",{"d":"M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2"}],["path",{"d":"M22 12h-1"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,3,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[2.5,12],[4.5,12],[12,12],[19.5,12],[21.5,12]]}];

export const BarbellIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BarbellIcon.displayName = "BarbellIcon";
