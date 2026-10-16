"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3"}],["path",{"d":"M16 3v4"}],["path",{"d":"M8 3v4"}],["path",{"d":"M4 11h12"}],["path",{"d":"M20 14l2 2h-3"}],["path",{"d":"M20 18l2 -2"}],["path",{"d":"M19 16a3 3 0 1 0 2 5.236"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3,4,5,6],"o":[13,12.5],"a":360}];

export const CalendarRepeatIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalendarRepeatIcon.displayName = "CalendarRepeatIcon";
