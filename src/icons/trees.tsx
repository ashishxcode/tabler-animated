"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 5l3 3l-2 1l4 4l-3 1l4 4h-9"}],["path",{"d":"M15 21l0 -3"}],["path",{"d":"M8 13l-2 -2"}],["path",{"d":"M8 12l2 -2"}],["path",{"d":"M8 21v-13"}],["path",{"d":"M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4l-.176 -.005"}]];
const rig: Rig[] = [{"fx":"sway","n":[0,1,2,3,4,5],"o":[12,21],"a":5}];

export const TreesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TreesIcon.displayName = "TreesIcon";
