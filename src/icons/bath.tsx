"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1"}],["path",{"d":"M6 12v-7a2 2 0 0 1 2 -2h3v2.25"}],["path",{"d":"M4 21l1 -1.5"}],["path",{"d":"M20 21l-1 -1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,16],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.5,7.5],[4.5,20.25],[19.5,20.25]]}];

export const BathIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BathIcon.displayName = "BathIcon";
