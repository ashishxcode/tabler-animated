"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M7 19l4 -2.5l-.5 -1.5"}],["path",{"d":"M16 21l-1 -6l-4.5 -3l3.5 -6"}],["path",{"d":"M7 9l1.5 -3h5.5l2 4l3 1"}],["path",{"d":"M3 17c.399 1.154 .899 1.805 1.5 1.951c6 1.464 10.772 2.262 13.5 2.927c1.333 .325 2.333 0 3 -.976"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,4],"o":[12,14],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,3],[9,17],[13,8.5]]}];

export const SnowboardingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SnowboardingIcon.displayName = "SnowboardingIcon";
