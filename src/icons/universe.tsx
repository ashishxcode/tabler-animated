"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.027 11.477a5 5 0 1 0 5.496 -4.45a4.951 4.951 0 0 0 -3.088 .681"}],["path",{"d":"M5.636 5.636a9 9 0 1 0 3.555 -2.188"}],["path",{"d":"M17 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[18,5],[12,12],[9,16]]}];

export const UniverseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UniverseIcon.displayName = "UniverseIcon";
