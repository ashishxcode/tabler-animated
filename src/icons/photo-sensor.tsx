"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 5h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M21 15v2a2 2 0 0 1 -2 2h-2"}],["path",{"d":"M7 19h-2a2 2 0 0 1 -2 -2v-2"}],["path",{"d":"M3 9v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M7 10a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1l0 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.35,"dl":0.12},{"fx":"tilt","n":[4],"o":[12,12],"a":-3}];

export const PhotoSensorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoSensorIcon.displayName = "PhotoSensorIcon";
