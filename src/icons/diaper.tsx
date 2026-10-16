"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8.323c0 -.579 0 -.868 .044 -1.11a2.7 2.7 0 0 1 2.17 -2.169c.239 -.044 .529 -.044 1.109 -.044h11.353c.579 0 .868 0 1.11 .044a2.7 2.7 0 0 1 2.169 2.17c.044 .24 .044 .53 .044 1.11v2.676a9 9 0 0 1 -18 0l.001 -2.677"}],["path",{"d":"M17 9h4"}],["path",{"d":"M3 9h4"}],["path",{"d":"M14.25 19.7v-1.4a6.3 6.3 0 0 1 6.3 -6.3"}],["path",{"d":"M9.75 19.7v-1.4a6.3 6.3 0 0 0 -6.3 -6.3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12.5],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,9],[5,9],[17.4,15.85],[6.6,15.85]]}];

export const DiaperIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DiaperIcon.displayName = "DiaperIcon";
