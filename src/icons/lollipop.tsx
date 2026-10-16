"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M21 10a3.5 3.5 0 0 0 -7 0"}],["path",{"d":"M14 10a3.5 3.5 0 0 1 -7 0"}],["path",{"d":"M14 17a3.5 3.5 0 0 0 0 -7"}],["path",{"d":"M14 3a3.5 3.5 0 0 0 0 7"}],["path",{"d":"M3 21l6 -6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[14,10],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[17.5,8.25],[10.5,11.75],[15.75,13.5],[12.25,6.5],[6,18]]}];

export const LollipopIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LollipopIcon.displayName = "LollipopIcon";
