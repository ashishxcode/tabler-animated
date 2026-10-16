"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 15a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M17 15a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M10 7a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M10 8.5a6 6 0 0 0 -5 5.5"}],["path",{"d":"M14 8.5a6 6 0 0 1 5 5.5"}],["path",{"d":"M10 8l-6 0"}],["path",{"d":"M20 8l-6 0"}],["path",{"d":"M2 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M20 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6],"o":[12,12],"a":0.06},{"fx":"pop","n":[7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[3,8],[21,8]]}];

export const VectorBezierIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VectorBezierIcon.displayName = "VectorBezierIcon";
