"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 14a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-5"}],["path",{"d":"M20 9c-.914 -3.455 -4.15 -6 -8 -6c-3.853 0 -7.089 2.542 -8 6"}],["path",{"d":"M15 9c-.69 -1.2 -1.517 -2 -3 -2s-2.31 .801 -3 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,6],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,16.5],[12,8]]}];

export const RemoteControlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RemoteControlIcon.displayName = "RemoteControlIcon";
