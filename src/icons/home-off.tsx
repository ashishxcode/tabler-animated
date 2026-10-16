"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12h-2l4.497 -4.497m2 -2l2.504 -2.504l9 9h-2"}],["path",{"d":"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-3"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2m2 2v6"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"hop","n":[0,1,2],"o":[12,21],"d":[0,-1.8]}];

export const HomeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeOffIcon.displayName = "HomeOffIcon";
