"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 13c0 -3.87 -3.37 -7 -10 -7h-8"}],["path",{"d":"M3 15h16a2 2 0 0 0 2 -2"}],["path",{"d":"M3 6v5h17.5"}],["path",{"d":"M3 11v4"}],["path",{"d":"M8 11v-5"}],["path",{"d":"M13 11v-4.5"}],["path",{"d":"M3 19h18"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6],"o":[12,12.5],"d":[2.4,0]}];

export const TrainIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrainIcon.displayName = "TrainIcon";
