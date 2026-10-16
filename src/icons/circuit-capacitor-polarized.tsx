"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 12h-8"}],["path",{"d":"M2 12h8"}],["path",{"d":"M10 7v10"}],["path",{"d":"M14 7v10"}],["path",{"d":"M17 5h4"}],["path",{"d":"M19 3v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,5],[19,5]]}];

export const CircuitCapacitorPolarizedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitCapacitorPolarizedIcon.displayName = "CircuitCapacitorPolarizedIcon";
