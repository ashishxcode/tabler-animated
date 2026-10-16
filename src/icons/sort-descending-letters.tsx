"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4"}],["path",{"d":"M19 10h-4l4 -7h-4"}],["path",{"d":"M4 15l3 3l3 -3"}],["path",{"d":"M7 6v12"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[11.5,12],"d":[1.8,0],"st":0.06}];

export const SortDescendingLettersIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SortDescendingLettersIcon.displayName = "SortDescendingLettersIcon";
