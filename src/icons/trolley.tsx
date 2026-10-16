"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 16l3 2"}],["path",{"d":"M12 17l8 -12"}],["path",{"d":"M17 10l2 1"}],["path",{"d":"M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8l-3.094 4.811a1.3 1.3 0 0 1 -1.792 .394l-3.306 -2.104a1.3 1.3 0 0 1 -.396 -1.8l3.094 -4.81a1.3 1.3 0 0 1 1.792 -.394"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,4],"o":[12.25,10.75],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,19],[7.5,17],[18,10.5]]}];

export const TrolleyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrolleyIcon.displayName = "TrolleyIcon";
