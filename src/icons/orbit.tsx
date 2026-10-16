"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.628 7.629c-2.76 .854 -4.628 2.491 -4.628 4.371c0 2.761 4.03 5 9 5s9 -2.239 9 -5s-4.03 -5 -9 -5"}],["path",{"d":"M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.08},{"fx":"pop","n":[1],"o":[12,12],"a":0.22,"dl":0.1}];

export const OrbitIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
OrbitIcon.displayName = "OrbitIcon";
