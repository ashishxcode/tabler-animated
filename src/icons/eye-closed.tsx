"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4"}],["path",{"d":"M3 15l2.5 -3.8"}],["path",{"d":"M21 14.976l-2.492 -3.776"}],["path",{"d":"M9 17l.5 -4"}],["path",{"d":"M15 17l-.5 -4"}]];
const rig: Rig[] = [{"fx":"blink","n":[0,1,2,3,4],"o":[12,13]}];

export const EyeClosedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EyeClosedIcon.displayName = "EyeClosedIcon";
