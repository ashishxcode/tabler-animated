"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5"}],["path",{"d":"M12 16a3 3 0 1 0 0 -6a3 3 0 0 0 0 6"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3],"a":0.25,"st":0.08,"os":[[12,13],[19,17.5]]},{"fx":"pop","n":[2],"o":[19,19],"a":0.35,"dl":0.12},{"fx":"tilt","n":[0],"o":[12,12],"a":-3}];

export const CameraUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CameraUpIcon.displayName = "CameraUpIcon";
