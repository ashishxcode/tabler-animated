"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"}],["path",{"d":"M4 6v6c0 1.657 3.582 3 8 3c1.075 0 2.1 -.08 3.037 -.224"}],["path",{"d":"M20 12v-6"}],["path",{"d":"M4 12v6c0 1.657 3.582 3 8 3c.166 0 .331 -.002 .495 -.006"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[4,5],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"wave","n":[0,1,2,3],"st":0.12,"os":[[12,6],[9.52,10.5],[20,9],[8.25,16.5]]}];

export const DatabasePlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DatabasePlusIcon.displayName = "DatabasePlusIcon";
