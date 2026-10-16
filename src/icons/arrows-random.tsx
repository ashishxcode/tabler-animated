"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 21h-4v-4"}],["path",{"d":"M16 21l5 -5"}],["path",{"d":"M6.5 9.504l-3.5 -2l2 -3.504"}],["path",{"d":"M3 7.504l6.83 -1.87"}],["path",{"d":"M4 16l4 -1l1 4"}],["path",{"d":"M8 15l-3.5 6"}],["path",{"d":"M21 5l-.5 4l-4 -.5"}],["path",{"d":"M20.5 9l-4.5 -5.5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5,6,7],"o":[12,12.25],"d":[2.4,0]}];

export const ArrowsRandomIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsRandomIcon.displayName = "ArrowsRandomIcon";
