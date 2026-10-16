"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.636 5.636a9 9 0 0 1 13.397 .747l-5.619 5.617l5.619 5.617a9 9 0 1 1 -13.397 -11.981"}],["path",{"d":"M11.5 7.5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.02,12],"a":0.08},{"fx":"pop","n":[1],"o":[12.5,7.5],"a":0.22,"dl":0.1}];

export const PacmanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PacmanIcon.displayName = "PacmanIcon";
