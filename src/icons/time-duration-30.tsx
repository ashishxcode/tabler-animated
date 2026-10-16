"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0"}],["path",{"d":"M8 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5"}],["path",{"d":"M3 12v.01"}],["path",{"d":"M7.5 4.2v.01"}],["path",{"d":"M7.5 19.8v.01"}],["path",{"d":"M4.2 16.5v.01"}],["path",{"d":"M4.2 7.5v.01"}],["path",{"d":"M12 21a9 9 0 0 0 0 -18"}]];
const rig: Rig[] = [{"fx":"pop","n":[7],"o":[16.5,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.5,12],[9.5,12],[3,12.01],[7.5,4.21],[7.5,19.81],[4.2,16.51],[4.2,7.51]]}];

export const TimeDuration30Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TimeDuration30Icon.displayName = "TimeDuration30Icon";
