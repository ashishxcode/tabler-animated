"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.5 7h2.733a2 2 0 0 1 1.337 .513l9.43 8.487h1.5a2.5 2.5 0 1 1 0 5h-2.733a2 2 0 0 1 -1.337 -.513l-9.43 -8.487h-1.5a2.5 2.5 0 1 1 0 -5"}],["path",{"d":"M18 3v7"}],["path",{"d":"M15 7l3 3l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,14],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[18,6.5],[18,8.5]]}];

export const EscalatorDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EscalatorDownIcon.displayName = "EscalatorDownIcon";
