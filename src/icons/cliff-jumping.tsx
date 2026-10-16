"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.5 18l2.5 2l2 -2"}],["path",{"d":"M18 21l3 -3l-4 -2l-2 -5"}],["path",{"d":"M9 8l3 3l3 1l4 -2l3 -2"}],["path",{"d":"M3 21v-1l2 -3l.5 -2.5l1.5 -2.5l-1 -5l1 -3l-1 -1l-2 .5l-2 -.5"}],["path",{"d":"M13.007 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[4.5,12],"a":0.06},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12.75,19],[18,16],[15.5,10],[15.01,8]]}];

export const CliffJumpingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CliffJumpingIcon.displayName = "CliffJumpingIcon";
