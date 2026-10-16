"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M5 12h-3"}],["path",{"d":"M19 12h3"}],["path",{"d":"M10 14v-3c0 -1.036 .895 -2 2 -2s2 .964 2 2v3"}],["path",{"d":"M14 12h-4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[3.5,12],[20.5,12],[12,11.5],[12,12]]}];

export const CircuitAmmeterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircuitAmmeterIcon.displayName = "CircuitAmmeterIcon";
