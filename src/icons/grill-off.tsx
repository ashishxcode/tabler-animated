"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 8h-3a6 6 0 0 0 6 6h2c.315 0 .624 -.024 .926 -.071m2.786 -1.214a5.99 5.99 0 0 0 2.284 -4.49l0 -.225h-7"}],["path",{"d":"M18.827 18.815a2 2 0 1 1 -2.663 -2.633"}],["path",{"d":"M9 14l-3 6"}],["path",{"d":"M15 18h-8"}],["path",{"d":"M15 5v-1"}],["path",{"d":"M12 5v-1"}],["path",{"d":"M9 5v-1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[16.91,18.09],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,11],[7.5,17],[11,18],[15,4.5],[12,4.5],[9,4.5]]}];

export const GrillOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GrillOffIcon.displayName = "GrillOffIcon";
