"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 9l-10 -4l-10 4l10 4l10 -4v6"}],["path",{"d":"M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1],"o":[12,19],"d":[0,-1.8]}];

export const SchoolIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SchoolIcon.displayName = "SchoolIcon";
