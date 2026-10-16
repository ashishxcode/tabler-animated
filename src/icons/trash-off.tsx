"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M4 7h3m4 0h9"}],["path",{"d":"M10 11l0 6"}],["path",{"d":"M14 14l0 3"}],["path",{"d":"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923"}],["path",{"d":"M18.384 14.373l.616 -7.373"}],["path",{"d":"M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[14,15.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[4],"o":[11.54,14],"a":0.06},{"fx":"pop","n":[1,2,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,7],[10,14],[18.69,10.69],[12,5]]}];

export const TrashOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrashOffIcon.displayName = "TrashOffIcon";
