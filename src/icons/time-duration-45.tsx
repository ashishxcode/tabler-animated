"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3"}],["path",{"d":"M7 9v2a1 1 0 0 0 1 1h1"}],["path",{"d":"M10 9v6"}],["path",{"d":"M7.5 4.2v.01"}],["path",{"d":"M4.2 7.5v.01"}],["path",{"d":"M3 12a9 9 0 1 0 9 -9"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[14.5,12],[8,10.5],[10,12],[7.5,4.21],[4.2,7.51]]}];

export const TimeDuration45Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TimeDuration45Icon.displayName = "TimeDuration45Icon";
