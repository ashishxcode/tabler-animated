"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3"}],["path",{"d":"M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6"}],["path",{"d":"M12 15v-8"}],["path",{"d":"M9 10l3 -3l3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,11],[12,8.5]]}];

export const TransitionTopIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TransitionTopIcon.displayName = "TransitionTopIcon";
