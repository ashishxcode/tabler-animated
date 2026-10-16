"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.5 20h-6.5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5"}],["path",{"d":"M14.815 11.96a3.001 3.001 0 1 0 -3.398 3.983"}],["path",{"d":"M18.62 22c-2 0 -3.62 -1.58 -3.62 -3.53c0 -1.727 1.273 -3.165 2.954 -3.47a3.4 3.4 0 0 0 -.24 1.264c0 1.95 1.621 3.53 3.62 3.53q .342 0 .666 -.06c-.521 1.326 -1.838 2.266 -3.38 2.266"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-14},{"fx":"pop","n":[1,2],"o":[15.5,16],"a":0.35,"dl":0.2}];

export const CameraMoonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CameraMoonIcon.displayName = "CameraMoonIcon";
