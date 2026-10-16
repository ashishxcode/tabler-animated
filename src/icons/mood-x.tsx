"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.983 12.556a9 9 0 1 0 -8.433 8.427"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}],["path",{"d":"M9.5 15c.658 .64 1.56 1 2.5 1c.194 0 .386 -.015 .574 -.045"}],["path",{"d":"M21.5 21.5l-5 -5"}],["path",{"d":"M16.5 21.5l5 -5"}]];
const rig: Rig[] = [{"fx":"draw","n":[4,5],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3],"a":0.3,"dl":0.12,"st":0.07,"os":[[9,10],[15.01,10],[11.04,15.5]]}];

export const MoodXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodXIcon.displayName = "MoodXIcon";
