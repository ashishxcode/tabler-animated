"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 7l8 10m-8 0l8 -10"}],["path",{"d":"M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[19,7.49],"st":0.07},{"fx":"pop","n":[0],"o":[9,12],"a":0.04}];

export const SuperscriptIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SuperscriptIcon.displayName = "SuperscriptIcon";
