"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"}],["path",{"d":"M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M15 3v4"}],["path",{"d":"M7 3v4"}],["path",{"d":"M3 11h16"}],["path",{"d":"M18 16.496v1.504l1 1"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,4],"o":[12.5,16.5],"dl":0.05,"st":0.08},{"fx":"pop","n":[2,3,5],"o":[13,11],"a":0.3,"dl":0.18},{"fx":"tilt","n":[0],"o":[11,13],"a":-2}];

export const CalendarTimeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalendarTimeIcon.displayName = "CalendarTimeIcon";
