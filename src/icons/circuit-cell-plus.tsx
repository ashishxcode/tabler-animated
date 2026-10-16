"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 12h9"}],["path",{"d":"M15 12h7"}],["path",{"d":"M11 5v14"}],["path",{"d":"M15 9v6"}],["path",{"d":"M3 5h4"}],["path",{"d":"M5 3v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[11,12],"a":0.06},{"fx":"pop","n":[0,1,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.5,12],[18.5,12],[15,12],[5,5],[5,5]]}];

export const CircuitCellPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitCellPlusIcon.displayName = "CircuitCellPlusIcon";
