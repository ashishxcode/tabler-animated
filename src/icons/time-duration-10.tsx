"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 9v6"}],["path",{"d":"M12 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0"}],["path",{"d":"M3 12v.01"}],["path",{"d":"M21 12v.01"}],["path",{"d":"M12 21v.01"}],["path",{"d":"M7.5 4.2v.01"}],["path",{"d":"M16.5 19.8v.01"}],["path",{"d":"M7.5 19.8v.01"}],["path",{"d":"M4.2 16.5v.01"}],["path",{"d":"M19.8 16.5v.01"}],["path",{"d":"M4.2 7.5v.01"}],["path",{"d":"M19.81 7.527a8.994 8.994 0 0 0 -7.81 -4.527"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,11],"o":[15.91,9],"a":0.06},{"fx":"pop","n":[0,2,3,4,5,6,7,8,9,10],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,12],[3,12.01],[21,12.01],[12,21.01],[7.5,4.21],[16.5,19.81],[7.5,19.81],[4.2,16.51],[19.8,16.51],[4.2,7.51]]}];

export const TimeDuration10Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TimeDuration10Icon.displayName = "TimeDuration10Icon";
