"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 0 -8.352 8.977"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}],["path",{"d":"M9.5 15c.658 .672 1.56 1 2.5 1c.102 0 .203 -.004 .304 -.012"}],["path",{"d":"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879"}],["path",{"d":"M19 18v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[19,18.5],"a":0.35,"dl":0.2},{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3],"a":0.3,"dl":0.12,"st":0.07,"os":[[9,10],[15.01,10],[10.9,15.5]]}];

export const MoodPinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodPinIcon.displayName = "MoodPinIcon";
