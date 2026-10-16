"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 18v-6a3 3 0 0 0 -3 -3h-7"}],["path",{"d":"M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11.5,11.5],"d":[-1.73,-1.73]}];

export const CornerUpLeftDoubleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CornerUpLeftDoubleIcon.displayName = "CornerUpLeftDoubleIcon";
