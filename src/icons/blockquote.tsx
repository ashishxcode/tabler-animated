"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 15h15"}],["path",{"d":"M21 19h-15"}],["path",{"d":"M15 11h6"}],["path",{"d":"M21 7h-6"}],["path",{"d":"M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"}],["path",{"d":"M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[13.5,17],"a":0.06},{"fx":"pop","n":[2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[18,11],[18,7],[10,8.25],[4,8.25]]}];

export const BlockquoteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BlockquoteIcon.displayName = "BlockquoteIcon";
