"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 3h4v4"}],["path",{"d":"M21 3l-15 15"}],["path",{"d":"M3 18h3v3"}],["path",{"d":"M16.5 20c1.576 -1.576 2.5 -4.095 2.5 -6.5c0 -4.81 -3.69 -8.5 -8.5 -8.5c-2.415 0 -4.922 .913 -6.5 2.5l12.5 12.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3],"o":[12.5,11.5],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,5],[4.5,19.5]]}];

export const BowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BowIcon.displayName = "BowIcon";
