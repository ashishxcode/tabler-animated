"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 7a2 2 0 1 0 -2 -2"}],["path",{"d":"M11 11v4h4l4 5"}],["path",{"d":"M15 11h1"}],["path",{"d":"M7 11.5a5 5 0 1 0 6 7.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,5],[15,15.5],[15.5,11],[8.46,16.31]]}];

export const DisabledOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DisabledOffIcon.displayName = "DisabledOffIcon";
