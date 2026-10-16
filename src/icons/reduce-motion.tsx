"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M5.5 5.941v.007"}],["path",{"d":"M2.941 8.498v.008"}],["path",{"d":"M2 11.996v.008"}],["path",{"d":"M2.941 15.494v.008"}],["path",{"d":"M5.5 18.052v.007"}],["path",{"d":"M9 18.992v.008"}],["path",{"d":"M12.5 18.052v.007"}],["path",{"d":"M15.059 15.494v.008"}],["path",{"d":"M16 11.996v.008"}],["path",{"d":"M15.059 8.498v.008"}],["path",{"d":"M12.5 5.941v.007"}],["path",{"d":"M9 5v.008"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[15,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8,9,10,11,12],"a":0.24,"dl":0.1,"st":0.07,"os":[[5.5,5.94],[2.94,8.5],[2,12],[2.94,15.5],[5.5,18.06],[9,19],[12.5,18.06],[15.06,15.5],[16,12],[15.06,8.5],[12.5,5.94],[9,5]]}];

export const ReduceMotionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReduceMotionIcon.displayName = "ReduceMotionIcon";
