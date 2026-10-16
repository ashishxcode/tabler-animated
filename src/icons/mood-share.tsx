"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.942 13.018a9 9 0 1 0 -8.942 7.982"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}],["path",{"d":"M9.5 15c.658 .672 1.56 1 2.5 1c.213 0 .424 -.017 .63 -.05"}],["path",{"d":"M16 22l5 -5"}],["path",{"d":"M21 21.5v-4.5h-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3],"a":0.3,"dl":0.12,"st":0.07,"os":[[9,10],[15.01,10],[11.07,15.5]]}];

export const MoodShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodShareIcon.displayName = "MoodShareIcon";
