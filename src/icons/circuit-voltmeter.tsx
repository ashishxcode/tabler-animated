"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M5 12h-3"}],["path",{"d":"M19 12h3"}],["path",{"d":"M10 10l2 4l2 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[3.5,12],[20.5,12],[12,12]]}];

export const CircuitVoltmeterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitVoltmeterIcon.displayName = "CircuitVoltmeterIcon";
