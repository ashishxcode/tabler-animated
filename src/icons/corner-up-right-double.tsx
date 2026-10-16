"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18v-6a3 3 0 0 1 3 -3h7"}],["path",{"d":"M10 13l4 -4l-4 -4m5 8l4 -4l-4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11.5,11.5],"d":[1.73,-1.73]}];

export const CornerUpRightDoubleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CornerUpRightDoubleIcon.displayName = "CornerUpRightDoubleIcon";
