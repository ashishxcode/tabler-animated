"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.59 18.31a15.57 15.57 0 0 1 4.51 -9.21a15.9 15.9 0 0 1 7.43 -4.19"}],["path",{"d":"M11.55 21a9.34 9.34 0 0 1 2.79 -7.65a9.5 9.5 0 0 1 6.54 -2.85"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,21],"d":[0,-2.4]}];

export const ExerciseBallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ExerciseBallIcon.displayName = "ExerciseBallIcon";
