"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 9a9.34 9.34 0 0 1 0 6"}],["path",{"d":"M21.699 16.607c.481 .934 .28 2.088 -.486 2.79c-.767 .703 -1.9 .77 -2.74 .165a48 48 0 0 1 -12.946 0a2.16 2.16 0 0 1 -2.74 -.165a2.345 2.345 0 0 1 -.486 -2.79a41.7 41.7 0 0 1 0 -9.163a2.346 2.346 0 0 1 .433 -2.856a2.16 2.16 0 0 1 2.793 -.145a48 48 0 0 1 12.946 0a2.16 2.16 0 0 1 2.793 .145c.78 .726 .961 1.918 .433 2.856a41.7 41.7 0 0 1 0 9.163"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.08},{"fx":"pop","n":[0],"o":[6.25,12],"a":0.22,"dl":0.1}];

export const PillowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PillowIcon.displayName = "PillowIcon";
