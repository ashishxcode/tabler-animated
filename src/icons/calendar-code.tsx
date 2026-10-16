"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}],["path",{"d":"M16 3v4"}],["path",{"d":"M8 3v4"}],["path",{"d":"M4 11h16"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"nudge","n":[2],"o":[8,5],"d":[-1.8,0]},{"fx":"nudge","n":[0,1,3],"o":[12,12],"d":[1.8,0]}];

export const CalendarCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalendarCodeIcon.displayName = "CalendarCodeIcon";
