"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M7 21l3 -4"}],["path",{"d":"M16 21l-2 -4l-3 -3l1 -6"}],["path",{"d":"M6 12l2 -3l4 -1l3 3l3 1"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12,14.5],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[13,4],[8.5,19]]}];

export const WalkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WalkIcon.displayName = "WalkIcon";
