"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"}],["path",{"d":"M14 19l2 2l4 -4"}],["path",{"d":"M9 8h4"}],["path",{"d":"M9 12h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,19],[11,8],[10,12]]}];

export const ChecklistIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChecklistIcon.displayName = "ChecklistIcon";
