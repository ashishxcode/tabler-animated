"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2"}],["path",{"d":"M5 12h6"}],["path",{"d":"M15 12l6 6"}],["path",{"d":"M15 18l6 -6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[8,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,12],[18,15],[18,15]]}];

export const MathFunctionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathFunctionIcon.displayName = "MathFunctionIcon";
