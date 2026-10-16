"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1"}],["path",{"d":"M8 7c1.657 0 3 -.895 3 -2s-1.343 -2 -3 -2s-3 .895 -3 2s1.343 2 3 2"}],["path",{"d":"M11 5h9"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,16],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,5],[15.5,5]]}];

export const BowlSpoonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BowlSpoonIcon.displayName = "BowlSpoonIcon";
