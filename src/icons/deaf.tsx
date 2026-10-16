"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1 -2 2a8 8 0 0 0 -2 3a4.5 4.5 0 0 1 -6.8 1.4"}],["path",{"d":"M10 10a3 3 0 1 1 5 2.2"}],["path",{"d":"M5 13l4 4"}],["path",{"d":"M9 13l-4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[13,11.99],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[13,9.58],[7,15],[7,15]]}];

export const DeafIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeafIcon.displayName = "DeafIcon";
