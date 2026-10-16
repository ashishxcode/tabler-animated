"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4.5"}],["path",{"d":"M16 3v4"}],["path",{"d":"M8 3v4"}],["path",{"d":"M4 11h16"}],["path",{"d":"M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,5],"o":[13,16.5],"dl":0.05,"st":0.08},{"fx":"pop","n":[1,2,4],"o":[14.5,11],"a":0.3,"dl":0.18},{"fx":"tilt","n":[0],"o":[12,13],"a":-2}];

export const CalendarUserIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalendarUserIcon.displayName = "CalendarUserIcon";
