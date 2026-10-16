"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 12.9a5 5 0 1 0 -3.902 -3.9"}],["path",{"d":"M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1],"o":[12,12],"d":[0,-2]}];

export const Microphone2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Microphone2Icon.displayName = "Microphone2Icon";
