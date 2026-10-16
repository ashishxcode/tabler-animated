"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"}],["path",{"d":"M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2"}],["path",{"d":"M17 15v-1"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[12,12],"a":-12}];

export const DeviceCameraPhoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceCameraPhoneIcon.displayName = "DeviceCameraPhoneIcon";
