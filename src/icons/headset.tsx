"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 14v-3a8 8 0 1 1 16 0v3"}],["path",{"d":"M18 19c0 1.657 -2.686 3 -6 3"}],["path",{"d":"M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3"}],["path",{"d":"M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,8.5],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[15,20.5],[6.5,15.5],[17.5,15.5]]}];

export const HeadsetIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HeadsetIcon.displayName = "HeadsetIcon";
