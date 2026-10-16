"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 12h-6"}],["path",{"d":"M2 9h7"}],["path",{"d":"M2 15h7"}],["path",{"d":"M8 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,12],[5.5,9],[5.5,15]]}];

export const LogicOrIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LogicOrIcon.displayName = "LogicOrIcon";
