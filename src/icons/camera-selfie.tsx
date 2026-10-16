"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"}],["path",{"d":"M9.5 15a3.5 3.5 0 0 0 5 0"}],["path",{"d":"M15 11l.01 0"}],["path",{"d":"M9 11l.01 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,3],"o":[12.01,13.53],"a":0.35,"dl":0.12},{"fx":"tilt","n":[0],"o":[12,12],"a":-3}];

export const CameraSelfieIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CameraSelfieIcon.displayName = "CameraSelfieIcon";
