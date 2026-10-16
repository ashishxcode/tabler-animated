"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 0 -8.983 9"}],["path",{"d":"M16.001 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M18.001 14.5v1.5"}],["path",{"d":"M18.001 20v1.5"}],["path",{"d":"M21.032 16.25l-1.299 .75"}],["path",{"d":"M16.27 19l-1.3 .75"}],["path",{"d":"M14.97 16.25l1.3 .75"}],["path",{"d":"M19.733 19l1.3 .75"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}],["path",{"d":"M9.5 15c.658 .64 1.56 1 2.5 1"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,3,4,5,6,7],"o":[18,18],"a":0.35,"dl":0.2},{"fx":"spin","n":[0,8,9,10],"o":[12,12],"a":360}];

export const MoodCogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodCogIcon.displayName = "MoodCogIcon";
