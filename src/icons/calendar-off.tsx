"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 5h9a2 2 0 0 1 2 2v9m-.184 3.839a2 2 0 0 1 -1.816 1.161h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.158 -1.815"}],["path",{"d":"M16 3v4"}],["path",{"d":"M8 3v1"}],["path",{"d":"M4 11h7m4 0h5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"draw","n":[3],"o":[12,11],"dl":0.05,"st":0.08},{"fx":"pop","n":[1,2],"o":[12,5],"a":0.3,"dl":0.18},{"fx":"tilt","n":[0],"o":[12,13],"a":-2}];

export const CalendarOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalendarOffIcon.displayName = "CalendarOffIcon";
