"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M14 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M3 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M9 17l5 -1.5"}],["path",{"d":"M6.5 8.5l7.81 5.37"}],["path",{"d":"M7 7l8 -1"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3,4,5,6],"st":0.06,"os":[[5,7],[16,15],[18,6],[6,18],[11.5,16.25],[10.41,11.19],[11,6.5]]}];

export const ChartDots3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartDots3Icon.displayName = "ChartDots3Icon";
