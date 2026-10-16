"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 20h-5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v2"}],["path",{"d":"M14.362 11.15a3 3 0 1 0 -4.144 4.263"}],["path",{"d":"M14 21v-4a2 2 0 1 1 4 0v4"}],["path",{"d":"M14 19h4"}],["path",{"d":"M21 15v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"a":0.25,"st":0.08,"os":[[11.68,12.71],[16,18]]},{"fx":"pop","n":[3,4],"o":[17.5,18],"a":0.35,"dl":0.12},{"fx":"tilt","n":[0],"o":[12,12],"a":-3}];

export const CameraAiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CameraAiIcon.displayName = "CameraAiIcon";
