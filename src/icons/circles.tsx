"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M2.5 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M13.5 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.12}];

export const CirclesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CirclesIcon.displayName = "CirclesIcon";
