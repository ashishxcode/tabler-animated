"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.432 4.442a3 3 0 1 0 4.114 4.146"}],["path",{"d":"M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M8.6 15.4l3.4 -3.4m2 -2l5 -5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"tilt","n":[0,1,2],"o":[11,20],"a":-16}];

export const ScissorsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ScissorsOffIcon.displayName = "ScissorsOffIcon";
