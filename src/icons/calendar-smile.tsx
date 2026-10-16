"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12m12 -4v4m-8 -4v4m-4 4h16m-9.995 3h.01m3.99 0h.01"}],["path",{"d":"M10.005 17a3.5 3.5 0 0 0 4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12.01,17.31],"a":0.3,"dl":0.18},{"fx":"tilt","n":[0],"o":[12,12],"a":-2}];

export const CalendarSmileIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalendarSmileIcon.displayName = "CalendarSmileIcon";
