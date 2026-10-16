"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 14l4 -4l-4 -4"}],["path",{"d":"M16 14l4 -4l-4 -4"}],["path",{"d":"M15 10h-7a4 4 0 1 0 0 8h1"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[2.4,0]}];

export const ArrowForwardUpDoubleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowForwardUpDoubleIcon.displayName = "ArrowForwardUpDoubleIcon";
