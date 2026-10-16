"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M8 8.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M15 8.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M15 15.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M8 15.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.5,8.5],[15.5,8.5],[15.5,15.5],[8.5,15.5]]}];

export const DiceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DiceIcon.displayName = "DiceIcon";
