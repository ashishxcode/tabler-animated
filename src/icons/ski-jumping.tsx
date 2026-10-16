"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 17.5l-5 -4.5v-6l5 4"}],["path",{"d":"M7 17.5l5 -4.5"}],["path",{"d":"M15.103 21.58l6.762 -14.502a2 2 0 0 0 -.968 -2.657"}],["path",{"d":"M8.897 21.58l-6.762 -14.503a2 2 0 0 1 .968 -2.657"}],["path",{"d":"M7 11l5 -4"}],["path",{"d":"M10.007 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12,13],"a":0.06},{"fx":"pop","n":[0,1,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[14.5,12.25],[9.5,15.25],[9.5,9],[12.01,4]]}];

export const SkiJumpingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SkiJumpingIcon.displayName = "SkiJumpingIcon";
