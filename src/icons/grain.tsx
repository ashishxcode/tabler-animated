"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M13.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M13.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[12,12],"a":0.06}];

export const GrainIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GrainIcon.displayName = "GrainIcon";
