"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 21v-3h6v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1"}],["path",{"d":"M9 18c-2.347 -2.169 -5 -5.226 -5 -8a8 8 0 1 1 16 0c0 2.774 -2.653 5.831 -5 8"}],["path",{"d":"M5.5 14h13"}],["path",{"d":"M10 14c-1.69 -4.712 -.924 -8.197 0 -11.602"}],["path",{"d":"M14 14c1.469 -3.867 1.19 -7.735 0 -11.602"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,10],"a":0.06},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,20],[12,14],[9.5,8.2],[14.5,8.2]]}];

export const AirBalloonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AirBalloonIcon.displayName = "AirBalloonIcon";
