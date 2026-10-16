"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"}],["path",{"d":"M4 6v6c0 1.657 3.582 3 8 3c.361 0 .716 -.009 1.065 -.026"}],["path",{"d":"M20 13v-7"}],["path",{"d":"M4 12v6c0 1.657 3.582 3 8 3"}],["path",{"d":"M16 22l5 -5"}],["path",{"d":"M21 21.5v-4.5h-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"wave","n":[0,1,2,3],"st":0.12,"os":[[12,6],[8.53,10.5],[20,9.5],[8,16.5]]}];

export const DatabaseShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DatabaseShareIcon.displayName = "DatabaseShareIcon";
