"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"}],["path",{"d":"M15 9l5 -5"}],["path",{"d":"M15 5l0 4l4 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[11.5,12.5],"a":-12}];

export const PhoneIncomingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhoneIncomingIcon.displayName = "PhoneIncomingIcon";
