"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.364 19.364a9 9 0 1 0 -12.728 0"}],["path",{"d":"M15.536 16.536a5 5 0 1 0 -7.072 0"}],["path",{"d":"M11 13a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"wave","n":[2,1],"st":0.13,"os":[[12,13],[12,12.27]]}];

export const BroadcastIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BroadcastIcon.displayName = "BroadcastIcon";
