"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 8a2 2 0 0 1 2 -2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2"}],["path",{"d":"M8 6a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-12"}],["path",{"d":"M13 14v2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2],"o":[13,11],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[13,12],"a":-3}];

export const Device3dCameraIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Device3dCameraIcon.displayName = "Device3dCameraIcon";
