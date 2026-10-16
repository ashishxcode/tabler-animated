"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.5 21h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5"}],["path",{"d":"M16 3v4"}],["path",{"d":"M8 3v4"}],["path",{"d":"M4 11h16"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,2,3],"o":[12,12]}];

export const CalendarBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalendarBoltIcon.displayName = "CalendarBoltIcon";
