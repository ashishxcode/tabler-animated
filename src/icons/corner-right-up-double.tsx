"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 19h6a3 3 0 0 0 3 -3v-7"}],["path",{"d":"M10 13l4 -4l4 4m-8 -5l4 -4l4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11.5,11.5],"d":[1.73,-1.73]}];

export const CornerRightUpDoubleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CornerRightUpDoubleIcon.displayName = "CornerRightUpDoubleIcon";
