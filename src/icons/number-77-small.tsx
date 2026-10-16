"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 8h4l-2 8"}],["path",{"d":"M6 8h4l-2 8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.12}];

export const Number77SmallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number77SmallIcon.displayName = "Number77SmallIcon";
