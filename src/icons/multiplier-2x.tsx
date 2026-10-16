"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 16l4 -4"}],["path",{"d":"M18 16l-4 -4"}],["path",{"d":"M6 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[8,12],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,14],[16,14]]}];

export const Multiplier2xIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Multiplier2xIcon.displayName = "Multiplier2xIcon";
