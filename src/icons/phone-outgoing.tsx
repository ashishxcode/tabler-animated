"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2"}],["path",{"d":"M15 5h6"}],["path",{"d":"M18.5 7.5l2.5 -2.5l-2.5 -2.5"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[12,11.75],"a":-12}];

export const PhoneOutgoingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhoneOutgoingIcon.displayName = "PhoneOutgoingIcon";
