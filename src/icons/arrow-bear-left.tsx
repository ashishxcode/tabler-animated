"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 3h-5v5"}],["path",{"d":"M8 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12.5,12],"d":[-2.4,0]}];

export const ArrowBearLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBearLeftIcon.displayName = "ArrowBearLeftIcon";
