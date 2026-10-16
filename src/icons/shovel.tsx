"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 4l3 3"}],["path",{"d":"M18.5 5.5l-8 8"}],["path",{"d":"M8.276 11.284l4.44 4.44a.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a.968 .968 0 0 1 1.37 0l-.001 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[11.51,20.98],"a":-16}];

export const ShovelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShovelIcon.displayName = "ShovelIcon";
