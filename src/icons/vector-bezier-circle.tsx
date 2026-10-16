"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 11a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M17 11a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M10 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M10 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M19 10a5 5 0 0 0 -5 -5"}],["path",{"d":"M19 14a5 5 0 0 1 -5 5"}],["path",{"d":"M5 14a5 5 0 0 0 5 5"}],["path",{"d":"M5 10a5 5 0 0 1 5 -5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[12,12],"a":0.06}];

export const VectorBezierCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VectorBezierCircleIcon.displayName = "VectorBezierCircleIcon";
