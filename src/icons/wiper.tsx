"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 18a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 9l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0"}],["path",{"d":"M12 18l-2.2 -12.8"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,9.72],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,18],[10.9,11.6]]}];

export const WiperIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WiperIcon.displayName = "WiperIcon";
