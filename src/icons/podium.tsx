"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 8h14l-.621 2.485a2 2 0 0 1 -1.94 1.515h-8.878a2 2 0 0 1 -1.94 -1.515l-.621 -2.485"}],["path",{"d":"M7 8v-2a3 3 0 0 1 3 -3"}],["path",{"d":"M8 12l1 9"}],["path",{"d":"M16 12l-1 9"}],["path",{"d":"M7 21h10"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.5,5.5],[8.5,16.5],[15.5,16.5],[12,21]]}];

export const PodiumIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PodiumIcon.displayName = "PodiumIcon";
