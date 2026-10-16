"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"}],["path",{"d":"M16 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0"}],["path",{"d":"M11 12h2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[1.8,0],"st":0.06}];

export const Sort90Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Sort90Icon.displayName = "Sort90Icon";
