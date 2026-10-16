"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 12h8"}],["path",{"d":"M14 12h8"}],["path",{"d":"M10 5v14"}],["path",{"d":"M14 9v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[10,12],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,12],[18,12],[14,12]]}];

export const CircuitCellIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitCellIcon.displayName = "CircuitCellIcon";
