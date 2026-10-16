"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 13v-1h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h2.5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"}],["path",{"d":"M13 22l3 -3l2 2l4 -4"}],["path",{"d":"M19 17h3v3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3],"o":[12.5,12.5],"st":0.08}];

export const HomeStatsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeStatsIcon.displayName = "HomeStatsIcon";
