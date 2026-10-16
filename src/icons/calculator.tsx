"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -14"}],["path",{"d":"M8 8a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -1"}],["path",{"d":"M8 14l0 .01"}],["path",{"d":"M12 14l0 .01"}],["path",{"d":"M16 14l0 .01"}],["path",{"d":"M8 17l0 .01"}],["path",{"d":"M12 17l0 .01"}],["path",{"d":"M16 17l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,8.5],[8,14.01],[12,14.01],[16,14.01],[8,17.01],[12,17.01],[16,17.01]]}];

export const CalculatorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalculatorIcon.displayName = "CalculatorIcon";
