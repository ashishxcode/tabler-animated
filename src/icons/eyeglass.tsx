"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h-2l-3 10"}],["path",{"d":"M16 4h2l3 10"}],["path",{"d":"M10 16l4 0"}],["path",{"d":"M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"}],["path",{"d":"M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"}]];
const rig: Rig[] = [{"fx":"blink","n":[0,1,2,3,4],"o":[12,12]}];

export const EyeglassIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EyeglassIcon.displayName = "EyeglassIcon";
