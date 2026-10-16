"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 21l-1 -4l-2 -3v-6"}],["path",{"d":"M5 14l-1 -3l4 -3l3 2l3 .5"}],["path",{"d":"M7 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M7 17l-2 4"}],["path",{"d":"M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,4],"o":[11.5,14.5],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,4],[6,19]]}];

export const OldIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
OldIcon.displayName = "OldIcon";
