"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M6 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M6 18l12 -12"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,17],[7,7]]}];

export const PercentageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PercentageIcon.displayName = "PercentageIcon";
