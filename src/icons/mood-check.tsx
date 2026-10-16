"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}],["path",{"d":"M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3],"a":0.3,"dl":0.12,"st":0.07,"os":[[9,10],[15.01,10],[12,15.5]]}];

export const MoodCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodCheckIcon.displayName = "MoodCheckIcon";
