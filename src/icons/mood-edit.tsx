"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.955 11.104a9 9 0 1 0 -9.895 9.847"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}],["path",{"d":"M9.5 15c.658 .672 1.56 1 2.5 1c.126 0 .251 -.006 .376 -.018"}],["path",{"d":"M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[11.98,11.98],"a":-5},{"fx":"pop","n":[1,2,3,4],"a":0.3,"dl":0.12,"st":0.07,"os":[[9,10],[15.01,10],[10.94,15.5],[18.5,18.5]]}];

export const MoodEditIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodEditIcon.displayName = "MoodEditIcon";
