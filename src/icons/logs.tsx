"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12h.01"}],["path",{"d":"M4 6h.01"}],["path",{"d":"M4 18h.01"}],["path",{"d":"M8 18h2"}],["path",{"d":"M8 12h2"}],["path",{"d":"M8 6h2"}],["path",{"d":"M14 6h6"}],["path",{"d":"M14 12h6"}],["path",{"d":"M14 18h6"}]];
const rig: Rig[] = [{"fx":"pop","n":[6,7,8],"o":[17,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.01,12],[4.01,6],[4.01,18],[9,18],[9,12],[9,6]]}];

export const LogsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LogsIcon.displayName = "LogsIcon";
