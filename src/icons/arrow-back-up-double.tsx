"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 14l-4 -4l4 -4"}],["path",{"d":"M8 14l-4 -4l4 -4"}],["path",{"d":"M9 10h7a4 4 0 1 1 0 8h-1"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[-2.4,0]}];

export const ArrowBackUpDoubleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBackUpDoubleIcon.displayName = "ArrowBackUpDoubleIcon";
