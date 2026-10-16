"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7c3 -2 6 -2 9 0s6 2 9 0"}],["path",{"d":"M3 17c3 -2 6 -2 9 0s6 2 9 0"}],["path",{"d":"M3 12c3 -2 6 -2 9 0s6 2 9 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06}];

export const RippleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RippleIcon.displayName = "RippleIcon";
