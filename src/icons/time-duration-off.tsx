"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12v.01"}],["path",{"d":"M7.5 19.8v.01"}],["path",{"d":"M4.2 16.5v.01"}],["path",{"d":"M4.2 7.5v.01"}],["path",{"d":"M12 21a8.994 8.994 0 0 0 6.362 -2.634m1.685 -2.336a9 9 0 0 0 -8.047 -13.03"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[4],"o":[16.5,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[3,12.01],[7.5,19.81],[4.2,16.51],[4.2,7.51]]}];

export const TimeDurationOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TimeDurationOffIcon.displayName = "TimeDurationOffIcon";
