"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1"}],["path",{"d":"M4 18l-1 -3h18l-1 3"}],["path",{"d":"M12 11v4"}],["path",{"d":"M7 3c1.333 2.667 1.333 5.333 0 8h10c1.333 -2.667 1.333 -5.333 0 -8"}],["path",{"d":"M6 3h12"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,18],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,13],[12.5,7],[12,3]]}];

export const Sailboat2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Sailboat2Icon.displayName = "Sailboat2Icon";
