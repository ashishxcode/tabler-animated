"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5"}],["path",{"d":"M4 15l8 4l8 -4"}],["path",{"d":"M12 11v-7"}],["path",{"d":"M9 7l3 -3l3 3"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,11.5],"d":[0,-1.5],"st":0.07}];

export const StackPopIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StackPopIcon.displayName = "StackPopIcon";
