"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M8.5 10.5l-1 -2.5h-5.5l2.48 5.788a2 2 0 0 0 1.84 1.212h2.18"}],["path",{"d":"M15.5 10.5l1 -2.5h5.5l-2.48 5.788a2 2 0 0 1 -1.84 1.212h-2.18"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12.5],"a":0.1}];

export const MilitaryAwardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MilitaryAwardIcon.displayName = "MilitaryAwardIcon";
