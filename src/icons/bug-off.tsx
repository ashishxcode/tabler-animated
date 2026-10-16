"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9.884 5.873a3 3 0 0 1 5.116 2.127v1"}],["path",{"d":"M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1"}],["path",{"d":"M3 13h4"}],["path",{"d":"M17 13h4"}],["path",{"d":"M12 20v-6"}],["path",{"d":"M4 19l3.35 -2"}],["path",{"d":"M4 7l3.75 2.4"}],["path",{"d":"M20 7l-3.75 2.4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[19,13],"a":0.35,"dl":0.2},{"fx":"shake","n":[0,1,2,4,5,6,7],"o":[11.5,12.5]}];

export const BugOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BugOffIcon.displayName = "BugOffIcon";
