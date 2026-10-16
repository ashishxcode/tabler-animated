"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 13a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M10 11h4l-4 4h4"}],["path",{"d":"M7 4l-2.75 2"}],["path",{"d":"M17 4l2.75 2"}]];
const rig: Rig[] = [{"fx":"shake","n":[0,1,2,3],"o":[12,12]}];

export const AlarmSnoozeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlarmSnoozeIcon.displayName = "AlarmSnoozeIcon";
