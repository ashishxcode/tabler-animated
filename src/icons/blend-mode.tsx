"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0"}],["path",{"d":"M3 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.08}];

export const BlendModeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BlendModeIcon.displayName = "BlendModeIcon";
