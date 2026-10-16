"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 7l-4 -4l-4 4"}],["path",{"d":"M10 3v4.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v2.394"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11,12],"d":[-2.4,0]}];

export const ArrowCurveLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowCurveLeftIcon.displayName = "ArrowCurveLeftIcon";
