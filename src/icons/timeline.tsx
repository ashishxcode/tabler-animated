"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 16l6 -7l5 5l5 -6"}],["path",{"d":"M14 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M9 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M19 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4],"o":[12,12],"st":0.08}];

export const TimelineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TimelineIcon.displayName = "TimelineIcon";
