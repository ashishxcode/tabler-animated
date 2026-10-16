"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12"}],["path",{"d":"M16 3v4"}],["path",{"d":"M8 3v4"}],["path",{"d":"M4 11h16"}],["path",{"d":"M8 14v4"}],["path",{"d":"M12 14v4"}],["path",{"d":"M16 14v4"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,11],"dl":0.05,"st":0.08},{"fx":"pop","n":[1,2,4,5,6],"o":[12,10.5],"a":0.3,"dl":0.18},{"fx":"tilt","n":[0],"o":[12,13],"a":-2}];

export const CalendarMonthIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalendarMonthIcon.displayName = "CalendarMonthIcon";
