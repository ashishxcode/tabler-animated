"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 13v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8"}],["path",{"d":"M3 10h18"}],["path",{"d":"M10 3v11"}],["path",{"d":"M2 22l5 -5"}],["path",{"d":"M7 21.5v-4.5h-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,10],[10,8.5],[4.5,19.5],[4.75,19.25]]}];

export const TableShortcutIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TableShortcutIcon.displayName = "TableShortcutIcon";
