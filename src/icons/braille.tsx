"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M16 12h.01"}],["path",{"d":"M8 12h.01"}],["path",{"d":"M16 19h.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.01,12],[8,12],[16.01,19]]}];

export const BrailleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrailleIcon.displayName = "BrailleIcon";
