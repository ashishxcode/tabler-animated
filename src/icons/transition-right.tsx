"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3"}],["path",{"d":"M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0"}],["path",{"d":"M9 12h8"}],["path",{"d":"M14 15l3 -3l-3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[13,12],[15.5,12]]}];

export const TransitionRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TransitionRightIcon.displayName = "TransitionRightIcon";
