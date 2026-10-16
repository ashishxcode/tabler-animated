"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,9.5],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,15],[17,15]]}];

export const SkateboardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SkateboardIcon.displayName = "SkateboardIcon";
