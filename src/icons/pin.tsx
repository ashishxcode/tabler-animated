"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"}],["path",{"d":"M9 15l-4.5 4.5"}],["path",{"d":"M14.5 4l5.5 5.5"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12.25,19.5],"d":[0,-2.2]}];

export const PinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PinIcon.displayName = "PinIcon";
