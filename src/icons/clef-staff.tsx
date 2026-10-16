"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 15h6"}],["path",{"d":"M15 11h6"}],["path",{"d":"M11 19h10"}],["path",{"d":"M11 12a4.16 4.16 0 0 1 -5.62 3.89a3.78 3.78 0 0 1 -2.38 -3.39a3.42 3.42 0 0 1 2.34 -3.38l3.79 -1.42a2.89 2.89 0 0 0 1.87 -2.7a2 2 0 0 0 -2 -2a2 2 0 0 0 -2 2v14a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[7,12],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[18,15],[18,11],[16,19]]}];

export const ClefStaffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClefStaffIcon.displayName = "ClefStaffIcon";
