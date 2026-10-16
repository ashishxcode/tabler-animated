"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 7l16 0"}],["path",{"d":"M10 11l0 6"}],["path",{"d":"M14 11l0 6"}],["path",{"d":"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}],["path",{"d":"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[12,14],"a":0.06},{"fx":"pop","n":[1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,14],[14,14],[12,5]]}];

export const TrashIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrashIcon.displayName = "TrashIcon";
