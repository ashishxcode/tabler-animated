"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054"}],["path",{"d":"M4 20l3.5 -3.5"}],["path",{"d":"M15 4l-3.5 3.5"}],["path",{"d":"M20 9l-3.5 3.5"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2,3],"o":[12,12]}];

export const PlugIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlugIcon.displayName = "PlugIcon";
