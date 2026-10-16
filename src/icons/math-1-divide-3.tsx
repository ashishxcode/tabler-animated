"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 15.5a.5 .5 0 0 1 .5 -.5h2a1.5 1.5 0 0 1 0 3h-1.167h1.167a1.5 1.5 0 0 1 0 3h-2a.5 .5 0 0 1 -.5 -.5"}],["path",{"d":"M5 12h14"}],["path",{"d":"M10 5l2 -2v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,18],[11,6]]}];

export const Math1Divide3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Math1Divide3Icon.displayName = "Math1Divide3Icon";
