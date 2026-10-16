"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 19h-6a3 3 0 0 1 -3 -3v-7"}],["path",{"d":"M13 13l-4 -4l-4 4m8 -5l-4 -4l-4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11.5,11.5],"d":[-1.73,-1.73]}];

export const CornerLeftUpDoubleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CornerLeftUpDoubleIcon.displayName = "CornerLeftUpDoubleIcon";
