"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M17 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M7 5l7 0"}],["path",{"d":"M10 19l7 0"}],["path",{"d":"M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[6],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,5],[19,19],[10.5,5],[13.5,19],[9,19],[15,5]]}];

export const VectorBezier2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VectorBezier2Icon.displayName = "VectorBezier2Icon";
