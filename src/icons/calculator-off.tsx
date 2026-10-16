"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-14c0 -.295 .064 -.575 .178 -.827m2.822 -1.173h11a2 2 0 0 1 2 2v11"}],["path",{"d":"M10 10h-1a1 1 0 0 1 -1 -1v-1m3 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1"}],["path",{"d":"M8 14v.01"}],["path",{"d":"M12 14v.01"}],["path",{"d":"M8 17v.01"}],["path",{"d":"M12 17v.01"}],["path",{"d":"M16 17v.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[6],"o":[16,17.01],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,8.5],[8,14.01],[12,14.01],[8,17.01],[12,17.01]]}];

export const CalculatorOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalculatorOffIcon.displayName = "CalculatorOffIcon";
