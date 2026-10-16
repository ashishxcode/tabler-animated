"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 15c2 -4.97 7.356 -11 9 -11c4.25 0 -5.5 11.958 -3 13s5.65 -6.678 7.4 -5.902c1.75 .777 -1.05 7.589 -.3 8.63s3.15 -.897 3.9 -2.728"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.5,12.01],"a":0.12}];

export const SketchingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SketchingIcon.displayName = "SketchingIcon";
