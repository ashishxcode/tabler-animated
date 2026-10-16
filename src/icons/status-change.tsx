"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 12v-2a6 6 0 1 1 12 0v2"}],["path",{"d":"M15 9l3 3l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,8],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,18],[18,18],[18,10.5]]}];

export const StatusChangeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StatusChangeIcon.displayName = "StatusChangeIcon";
