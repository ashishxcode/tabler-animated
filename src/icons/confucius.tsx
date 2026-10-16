"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 19l3 2v-18"}],["path",{"d":"M4 10l8 -2"}],["path",{"d":"M4 18l8 -10"}],["path",{"d":"M20 18l-8 -8l8 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[14.5,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,9],[8,13]]}];

export const ConfuciusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ConfuciusIcon.displayName = "ConfuciusIcon";
