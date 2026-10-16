"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 12.75a4 1.75 0 1 0 8 0a4 1.75 0 1 0 -8 0"}],["path",{"d":"M8 12.5v3.75c0 .966 1.79 1.75 4 1.75s4 -.784 4 -1.75v-3.75"}],["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[13.5,10.5],"dl":0.05,"st":0.07},{"fx":"pop","n":[3],"o":[12,12],"a":0.04}];

export const FileDatabaseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileDatabaseIcon.displayName = "FileDatabaseIcon";
