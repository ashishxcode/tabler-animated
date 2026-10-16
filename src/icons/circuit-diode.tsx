"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 12h-6"}],["path",{"d":"M2 12h6"}],["path",{"d":"M8 7l8 5l-8 5l0 -10"}],["path",{"d":"M16 7v10"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,12],[5,12]]}];

export const CircuitDiodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitDiodeIcon.displayName = "CircuitDiodeIcon";
