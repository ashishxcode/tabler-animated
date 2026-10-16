"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 17l5 1l.75 -1.5"}],["path",{"d":"M15 21v-4l-4 -3l1 -6"}],["path",{"d":"M7 12v-3l5 -1l3 3l3 1"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12.5,14.5],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[13.01,5],[6.88,17.25]]}];

export const RunIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RunIcon.displayName = "RunIcon";
