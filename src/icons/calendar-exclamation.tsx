"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 21h-9a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5"}],["path",{"d":"M16 3v4"}],["path",{"d":"M8 3v4"}],["path",{"d":"M4 11h16"}],["path",{"d":"M11 15h1"}],["path",{"d":"M12 15v3"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[6,7],"o":[19,19.01],"dl":0.2,"st":0.08},{"fx":"draw","n":[3],"o":[12,11],"dl":0.05,"st":0.08},{"fx":"pop","n":[1,2,4,5],"o":[12,10.5],"a":0.3,"dl":0.18},{"fx":"tilt","n":[0],"o":[12,13],"a":-2}];

export const CalendarExclamationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CalendarExclamationIcon.displayName = "CalendarExclamationIcon";
