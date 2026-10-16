"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 12h4"}],["path",{"d":"M18 12h4"}],["path",{"d":"M18 5v14"}],["path",{"d":"M14 9v6"}],["path",{"d":"M10 5v14"}],["path",{"d":"M6 9v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,4],"o":[14,12],"a":0.06},{"fx":"pop","n":[0,1,3,5],"a":0.22,"dl":0.1,"st":0.07,"os":[[4,12],[20,12],[14,12],[6,12]]}];

export const CircuitBatteryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitBatteryIcon.displayName = "CircuitBatteryIcon";
