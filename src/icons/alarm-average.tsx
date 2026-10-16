"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0"}],["path",{"d":"M7 4l-2.75 2"}],["path",{"d":"M17 4l2.75 2"}],["path",{"d":"M8 13h1l2 3l2 -6l2 3h1"}]];
const rig: Rig[] = [{"fx":"shake","n":[0,1,2,3],"o":[12,12]}];

export const AlarmAverageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlarmAverageIcon.displayName = "AlarmAverageIcon";
