"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 20h-8a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4"}],["path",{"d":"M14.958 13.506a3 3 0 1 0 -1.735 2.235"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[1],"a":0.25,"st":0.08,"os":[[12,13]]},{"fx":"tilt","n":[0],"o":[12,12],"a":-3}];

export const CameraPauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CameraPauseIcon.displayName = "CameraPauseIcon";
