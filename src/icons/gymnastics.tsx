"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M13 21l1 -9l7 -6"}],["path",{"d":"M3 11h6l5 1"}],["path",{"d":"M11.5 8.5l4.5 -3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[17,13.5],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,7],[8.5,11.5],[13.75,6.75]]}];

export const GymnasticsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GymnasticsIcon.displayName = "GymnasticsIcon";
