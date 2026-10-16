"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3"}],["path",{"d":"M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0"}],["path",{"d":"M15 12h-8"}],["path",{"d":"M10 9l-3 3l3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,12],[8.5,12]]}];

export const TransitionLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TransitionLeftIcon.displayName = "TransitionLeftIcon";
