"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 16v-8"}],["path",{"d":"M10 12h4"}],["path",{"d":"M14 8v8"}],["path",{"d":"M17 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2l-2 0"}],["path",{"d":"M3 8v6a2 2 0 1 0 4 0v-6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2,3,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12]]}];

export const UhdIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UhdIcon.displayName = "UhdIcon";
