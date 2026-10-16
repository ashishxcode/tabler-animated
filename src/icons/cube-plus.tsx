"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12.5v-4.509a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.007c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0"}],["path",{"d":"M12 22v-10"}],["path",{"d":"M12 12l8.73 -5.04"}],["path",{"d":"M3.27 6.96l8.73 5.04"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[4,5],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.12}];

export const CubePlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CubePlusIcon.displayName = "CubePlusIcon";
