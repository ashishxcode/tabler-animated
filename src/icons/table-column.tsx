"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M10 10h11"}],["path",{"d":"M10 3v18"}],["path",{"d":"M9 3l-6 6"}],["path",{"d":"M10 7l-7 7"}],["path",{"d":"M10 12l-7 7"}],["path",{"d":"M10 17l-4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.5,10],[10,12],[6,6],[6.5,10.5],[6.5,15.5],[8,19]]}];

export const TableColumnIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TableColumnIcon.displayName = "TableColumnIcon";
