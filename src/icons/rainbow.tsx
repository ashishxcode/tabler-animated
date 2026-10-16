"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 17c0 -5.523 -4.477 -10 -10 -10c-5.523 0 -10 4.477 -10 10"}],["path",{"d":"M18 17a6 6 0 1 0 -12 0"}],["path",{"d":"M14 17a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,14],[12,16]]}];

export const RainbowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RainbowIcon.displayName = "RainbowIcon";
