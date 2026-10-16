"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 12h-7l3 -3"}],["path",{"d":"M6 15l-3 -3"}],["path",{"d":"M14 12h7l-3 -3"}],["path",{"d":"M18 15l3 -3"}],["path",{"d":"M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1"}],["path",{"d":"M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.5,10.5],[4.5,13.5],[17.5,10.5],[19.5,13.5]]}];

export const ViewportWideIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ViewportWideIcon.displayName = "ViewportWideIcon";
