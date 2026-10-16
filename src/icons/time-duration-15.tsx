"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3"}],["path",{"d":"M9 9v6"}],["path",{"d":"M3 12v.01"}],["path",{"d":"M12 21v.01"}],["path",{"d":"M7.5 4.2v.01"}],["path",{"d":"M16.5 19.8v.01"}],["path",{"d":"M7.5 19.8v.01"}],["path",{"d":"M4.2 16.5v.01"}],["path",{"d":"M19.8 16.5v.01"}],["path",{"d":"M4.2 7.5v.01"}],["path",{"d":"M21 12a9 9 0 0 0 -9 -9"}]];
const rig: Rig[] = [{"fx":"pop","n":[10],"o":[16.5,7.5],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9],"a":0.24,"dl":0.1,"st":0.07,"os":[[13.5,12],[9,12],[3,12.01],[12,21.01],[7.5,4.21],[16.5,19.81],[7.5,19.81],[4.2,16.51],[19.8,16.51],[4.2,7.51]]}];

export const TimeDuration15Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TimeDuration15Icon.displayName = "TimeDuration15Icon";
