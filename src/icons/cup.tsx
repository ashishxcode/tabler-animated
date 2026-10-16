"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 11h14v-3h-14l0 3"}],["path",{"d":"M17.5 11l-1.5 10h-8l-1.5 -10"}],["path",{"d":"M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"}],["path",{"d":"M15 5v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,13],"a":0.06},{"fx":"pop","n":[3],"a":0.24,"dl":0.1,"st":0.07,"os":[[15,4]]}];

export const CupIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CupIcon.displayName = "CupIcon";
