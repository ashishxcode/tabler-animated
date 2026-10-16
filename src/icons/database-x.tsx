"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"}],["path",{"d":"M4 6v6c0 1.657 3.582 3 8 3c.537 0 1.062 -.02 1.57 -.058"}],["path",{"d":"M20 13.5v-7.5"}],["path",{"d":"M4 12v6c0 1.657 3.582 3 8 3c.384 0 .762 -.01 1.132 -.03"}],["path",{"d":"M22 22l-5 -5"}],["path",{"d":"M17 22l5 -5"}]];
const rig: Rig[] = [{"fx":"draw","n":[4,5],"o":[19.5,19.5],"dl":0.2,"st":0.08},{"fx":"wave","n":[0,1,2,3],"st":0.12,"os":[[12,6],[8.79,10.5],[20,9.75],[8.57,16.5]]}];

export const DatabaseXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DatabaseXIcon.displayName = "DatabaseXIcon";
