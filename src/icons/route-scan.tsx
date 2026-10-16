"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M3 17v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M17 21h2a2 2 0 0 0 2 -2v-2"}],["path",{"d":"M7 12v-3h3"}],["path",{"d":"M14 9h3v3"}],["path",{"d":"M7 9l4.414 4.414a2 2 0 0 1 .586 1.414v2.172"}],["path",{"d":"M17 9l-4.414 4.414a2 2 0 0 0 -.586 1.414v2.172"}]];
const rig: Rig[] = [{"fx":"pop","n":[6,7],"o":[12,13],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.22,"dl":0.1,"st":0.07,"os":[[5,5],[5,19],[19,5],[19,19],[8.5,10.5],[15.5,10.5]]}];

export const RouteScanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RouteScanIcon.displayName = "RouteScanIcon";
