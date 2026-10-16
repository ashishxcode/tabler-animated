"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4"}],["path",{"d":"M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7"}],["path",{"d":"M16 9h2"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[1],"o":[10.5,11],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,11.75],[17,9]]}];

export const DevicesCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DevicesCheckIcon.displayName = "DevicesCheckIcon";
