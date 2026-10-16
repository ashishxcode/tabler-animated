"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.984 12.536a9 9 0 1 0 -8.463 8.449"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}],["path",{"d":"M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3,4,5],"a":0.3,"dl":0.12,"st":0.07,"os":[[19,19],[19,17.5],[9,10],[15.01,10],[12,15.5]]}];

export const MoodUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodUpIcon.displayName = "MoodUpIcon";
