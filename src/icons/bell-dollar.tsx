"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 3.911 5.17"}],["path",{"d":"M9 17v1a3 3 0 0 0 4.02 2.822"}],["path",{"d":"M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M19 21v1m0 -8v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[19,18],"a":0.35,"dl":0.2},{"fx":"swing","n":[0],"o":[10.96,4],"a":12},{"fx":"tilt","n":[1],"o":[11.01,18],"a":7,"dl":0.07}];

export const BellDollarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BellDollarIcon.displayName = "BellDollarIcon";
