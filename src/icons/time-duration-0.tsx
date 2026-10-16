"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12v.01"}],["path",{"d":"M21 12v.01"}],["path",{"d":"M12 21v.01"}],["path",{"d":"M12 3v.01"}],["path",{"d":"M7.5 4.2v.01"}],["path",{"d":"M16.5 4.2v.01"}],["path",{"d":"M16.5 19.8v.01"}],["path",{"d":"M7.5 19.8v.01"}],["path",{"d":"M4.2 16.5v.01"}],["path",{"d":"M19.8 16.5v.01"}],["path",{"d":"M19.8 7.5v.01"}],["path",{"d":"M4.2 7.5v.01"}],["path",{"d":"M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[12],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9,10,11],"a":0.24,"dl":0.1,"st":0.07,"os":[[3,12.01],[21,12.01],[12,21.01],[12,3.01],[7.5,4.21],[16.5,4.21],[16.5,19.81],[7.5,19.81],[4.2,16.51],[19.8,16.51],[19.8,7.51],[4.2,7.51]]}];

export const TimeDuration0Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TimeDuration0Icon.displayName = "TimeDuration0Icon";
