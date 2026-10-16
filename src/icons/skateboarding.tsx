"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.5 15h3.5l.75 -1.5"}],["path",{"d":"M14 19v-5l-2.5 -3l2.5 -4"}],["path",{"d":"M8 8l3 -1h4l1 3h3"}],["path",{"d":"M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1"}],["path",{"d":"M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1"}],["path",{"d":"M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1"}],["path",{"d":"M14.007 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,18.5],"a":0.06},{"fx":"pop","n":[0,1,2,3,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[7.63,14.25],[12.75,13],[13.5,8.5],[17.5,20.5],[6.5,20.5],[16.01,4]]}];

export const SkateboardingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SkateboardingIcon.displayName = "SkateboardingIcon";
