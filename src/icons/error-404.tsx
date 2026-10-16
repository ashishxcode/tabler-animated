"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8v3a1 1 0 0 0 1 1h3"}],["path",{"d":"M7 8v8"}],["path",{"d":"M17 8v3a1 1 0 0 0 1 1h3"}],["path",{"d":"M21 8v8"}],["path",{"d":"M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3,4],"o":[14,12],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,10],[19,10]]}];

export const Error404Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Error404Icon.displayName = "Error404Icon";
