"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M3 14l4 1l.5 -.5"}],["path",{"d":"M12 18v-3l-3 -2.923l.75 -5.077"}],["path",{"d":"M6 10v-2l4 -1l2.5 2.5l2.5 .5"}],["path",{"d":"M21 22a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1"}],["path",{"d":"M18 21l1 -11l2 -1"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,21.5],"a":0.06},{"fx":"pop","n":[0,1,2,3,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,3],[5.25,14.5],[10.5,12.5],[10.5,8.5],[19.5,15]]}];

export const TreadmillIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TreadmillIcon.displayName = "TreadmillIcon";
