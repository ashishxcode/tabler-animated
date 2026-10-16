"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"}],["path",{"d":"M18 14v4h4"}],["path",{"d":"M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M15 3v4"}],["path",{"d":"M7 3v4"}],["path",{"d":"M3 11h16"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[12.5,12.5],"st":0.08}];

export const CalendarStatsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalendarStatsIcon.displayName = "CalendarStatsIcon";
