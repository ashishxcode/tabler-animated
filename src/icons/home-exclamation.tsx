"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h8"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.857 1.257"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[19,19.01],"dl":0.2,"st":0.08},{"fx":"hop","n":[0,1],"o":[12,21],"d":[0,-1.8]}];

export const HomeExclamationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeExclamationIcon.displayName = "HomeExclamationIcon";
