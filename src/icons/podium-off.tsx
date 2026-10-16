"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 8h7l-.621 2.485a2 2 0 0 1 -1.94 1.515h-.439m-4 0h-4.439a2 2 0 0 1 -1.94 -1.515l-.621 -2.485h3"}],["path",{"d":"M7 8v-1m.864 -3.106a2.99 2.99 0 0 1 2.136 -.894"}],["path",{"d":"M8 12l1 9"}],["path",{"d":"M15.599 15.613l-.599 5.387"}],["path",{"d":"M7 21h10"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[15.3,18.31],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,10],[8.5,5.5],[8.5,16.5],[12,21]]}];

export const PodiumOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PodiumOffIcon.displayName = "PodiumOffIcon";
