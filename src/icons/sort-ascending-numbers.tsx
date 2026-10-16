"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 15l3 3l3 -3"}],["path",{"d":"M7 6v12"}],["path",{"d":"M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2"}],["path",{"d":"M15 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19 16v3a2 2 0 0 1 -2 2h-1.5"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[11.5,12],"d":[1.8,0],"st":0.06}];

export const SortAscendingNumbersIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SortAscendingNumbersIcon.displayName = "SortAscendingNumbersIcon";
