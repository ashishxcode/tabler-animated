"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 5h10m-12 2v10m14 -10v10"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,11],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,5],[19,19],[19,5],[5,19]]}];

export const Shape3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Shape3Icon.displayName = "Shape3Icon";
