"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 6 -5.775l0 -.225"}],["path",{"d":"M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4"}],["path",{"d":"M15 14l1 2"}],["path",{"d":"M9 14l-3 6"}],["path",{"d":"M15 18h-8"}],["path",{"d":"M15 5v-1"}],["path",{"d":"M12 5v-1"}],["path",{"d":"M9 5v-1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,11],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,18],[15.5,15],[7.5,17],[11,18],[15,4.5],[12,4.5],[9,4.5]]}];

export const GrillIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GrillIcon.displayName = "GrillIcon";
