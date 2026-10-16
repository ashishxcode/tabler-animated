"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M4 22l4 -2v-3h12"}],["path",{"d":"M11 20h9"}],["path",{"d":"M8 14l3 -2l1 -4c3 1 3 4 3 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,19.5],"a":0.06},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,17],[9,5],[15.5,20],[11.5,11]]}];

export const MassageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MassageIcon.displayName = "MassageIcon";
