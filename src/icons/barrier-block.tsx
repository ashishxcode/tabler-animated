"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -7"}],["path",{"d":"M7 16v4"}],["path",{"d":"M7.5 16l9 -9"}],["path",{"d":"M13.5 16l6.5 -6.5"}],["path",{"d":"M4 13.5l6.5 -6.5"}],["path",{"d":"M17 16v4"}],["path",{"d":"M5 20h4"}],["path",{"d":"M15 20h4"}],["path",{"d":"M17 7v-2"}],["path",{"d":"M7 7v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,11.5],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8,9],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,18],[12,11.5],[16.75,12.75],[7.25,10.25],[17,18],[7,20],[17,20],[17,6],[7,6]]}];

export const BarrierBlockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BarrierBlockIcon.displayName = "BarrierBlockIcon";
