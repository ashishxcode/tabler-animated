"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 7h16"}],["path",{"d":"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}],["path",{"d":"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}],["path",{"d":"M10 12l4 4m0 -4l-4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,14],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[12,14]]}];

export const TrashXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrashXIcon.displayName = "TrashXIcon";
